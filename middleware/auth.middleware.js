const jwt = require('jsonwebtoken');
const config = require('config');
module.exports = (req, res, next) => {
    /**
     * Check server availability
     */
    if(req.method === 'OPTIONS') {
        return next()
    }

    try {
        
        const token = req.headers.authorization.split(' ')[1]; // Get token

        if(!token) {
            return res.status(401).json({
                message: 'Not auth'
            });
        }

        const decoded = jwt.verify(token, config.get('jwtSecret'));
        req.user = decoded;

        next();

    } catch (e) {
        res.status(401).json({
            message: 'Not auth'
        });
    }
}