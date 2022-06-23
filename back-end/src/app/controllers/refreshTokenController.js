const jwt = require('jsonwebtoken');
const Token = require('./token');
class refreshController {
    async requestRefreshToken(req, res) {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken)
            return res.status(401).json("You're not authenticated");
        jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
            if (err) console.log(err);
            const newAccessToken = Token.generateAccessToken(user);
            const newRefreshToken = Token.generateRefreshToken(user);
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                secure: false,
                path: '/',
                sameSite: 'strict',
            });
            res.status(200).json({
                accessToken: newAccessToken,
                refreshToken: newRefreshToken,
            });
        });
    }
}
module.exports = new refreshController();
