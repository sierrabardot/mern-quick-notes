const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    create,
    login,
    checkToken,
};

async function create(req, res) {
    const userData = req.body;
    try {
        const user = await User.create(userData);
        const token = createJWT(user);
        res.json(token);
    } catch (error) {
        console.error(error);
        res.status(400).json({
            error: error,
        });
    }
}

async function login(req, res) {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) throw new Error(`User not found.`);
        if (!(await bcrypt.compare(password, user.password)))
            throw new Error(`Passwords don't match`);
        const token = createJWT(user);
        res.json(token);
    } catch (error) {
        console.error(error);
        res.status(400).json({
            error: error,
        });
    }
}

function checkToken(req, res) {
    // req.user will always be there for you when a token is sent
    console.log('req.user', req.user);
    res.json(req.user.exp);
}

function createJWT(user) {
    return jwt.sign(
        {
            sub: user._id,
            name: user.name,
            email: user.email,
        },
        process.env.SECRET,
        { expiresIn: '24h' }
    );
}
