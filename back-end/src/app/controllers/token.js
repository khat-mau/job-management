const jwt = require('jsonwebtoken');

Token = {
    generateAccessToken: (user) => {
        return jwt.sign(
            {
                id: user.id,
                fistName: user.fistName,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone,
                username: user.username,
                status: user.status,
                role: user.role,
            },
            process.env.JWT_ACCESS_KEY,
            {
                expiresIn: '1h',
            },
        );
    },

    generateRefreshToken: (user) => {
        return jwt.sign(
            {
                id: user.id,
                fistName: user.fistName,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone,
                username: user.username,
                status: user.status,
                role: user.role,
            },
            process.env.JWT_REFRESH_KEY,
            {
                expiresIn: '24h',
            },
        );
    },

    verifyToken: (req, res, next) => {
        const token = req.headers.token;
        if (token) {
            const accessToken = token.split(' ')[1];
            jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
                if (err) {
                    return res.status(403).json('Token is not valid!');
                }
                req.user = user;
                next();
            });
        } else {
            res.status(401).json("You're not authenticated");
        }
    },

    verifyleTokenAdmin: (req, res, next) => {
        Token.verifyToken(req, res, () => {
            if (req.user.role == 'admin') {
                return next();
            } else {
                return res.status(403).json("You're not allowed to do that!");
            }
        });
    },

    verifyTokenUser: (req, res, next) => {
        verifyToken(req, res, () => {
            if (req.user.role == 'user') {
                next();
            } else {
                res.status(403).json("You're not allowed to do that!");
            }
        });
    },
};

module.exports = Token;
