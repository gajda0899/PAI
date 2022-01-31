import jwt from 'jsonwebtoken';
import process from 'process';

export const generateToken = (user) => {
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin
    },
    process.env.JWT_SECRET || "Some Secret Data",
    {
        expiresIn:'30d',
    });
}

export const isAuthorized = (req, res, next) => {
    const authorization = req.headers.authorization;

    if (authorization) {
        const token = authorization.slice(7, authorization.length); //remove desc and we have just a token

        jwt.verify(token, process.env.JWT_SECRET || 'Some Secret Data', (err, decode) => {
            if (err) {
                res.status(401).send({message: 'Invalid token'});
            } else {
                req.user = decode;
                next();
            }
        })
    } else {
        res.status(401).send({message: 'There is no token'});
    }
}