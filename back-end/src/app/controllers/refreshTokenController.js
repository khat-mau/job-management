const jwt = require('jsonwebtoken');
const Token = require('./token');

class refreshController {
    async requestRefreshToken(req, res) {
        try {
            const refreshToken = req.cookies.refreshToken;

            if (!refreshToken)
                return res.status(401).json("You're not authenticated.");
            jwt.verify(
                refreshToken,
                process.env.JWT_REFRESH_KEY,
                (err, user) => {
                    if (err) console.log(err);
                    const newAccessToken = Token.generateAccessToken(user);
                    const newRefreshToken = Token.generateRefreshToken(user);

                    res.status(200).json({
                        accessToken: newAccessToken,
                        refreshToken: newRefreshToken,
                    });
                },
            );
        } catch (e) {
            res.status(500).json({ errorStatus: true, message: e.message });
        }
    }
}
module.exports = new refreshController();
