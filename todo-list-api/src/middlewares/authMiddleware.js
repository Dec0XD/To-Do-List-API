const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const { JWT_SECRET } = process.env;

const verifyToken = promisify(jwt.verify);

const authMiddleware = async (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = await verifyToken(token, JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
};

module.exports = authMiddleware;