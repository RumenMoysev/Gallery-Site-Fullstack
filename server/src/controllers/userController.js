const router = require('express').Router()

const userManager = require('../managers/userManager.js')

router.post('/register', async (req, res) => {
    const userData = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    }

    const rePassword = req.body.repeatPassword

    try {
        const [user, authToken] = await userManager.register(userData, rePassword)

        res.cookie('authToken', authToken)
        res.json({
            email: user.email,
            username: user.username,
            userId: user._id
        })

    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
})

router.post('/login', async (req, res) => {
    const userData = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    }

    try {
        const [user, authToken] = await userManager.login(userData)

        res.cookie('authToken', authToken)
        res.cookie('userId', user._id)
        res.json({
            email: user.email,
            username: user.username,
            userId: user._id
        })

    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
})

router.get('/getUser', async (req, res) => {
    const userId = req.cookies.userId
    
    try {
        const [user, authToken] = await userManager.findUser(userId)

        res.cookie('authToken', authToken)
        res.cookie('userId', user._id)
        res.json({
            email: user.email,
            username: user.username,
            userId: user._id
        })
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
})

router.post('/logout', (req, res) => {
    res.clearCookie('authToken')
    res.clearCookie('userId')
    res.end()
})

module.exports = router