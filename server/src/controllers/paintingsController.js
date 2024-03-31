const router = require('express').Router()

const paintingsManager = require('../managers/paintingsManagers.js')

router.get('/', async (req, res) => {
    try {
        const paintings = await paintingsManager.getAllPaintings()

        res.status(200).json(paintings)
    } catch (err) {
        res.status(401).json({
            message: err.message
        })
    }
})

router.post('/', async (req, res) => {
    const userId = req.cookies.userId

    const paintingData = {
        title: req.body.title,
        imageUrl: req.body.imageUrl,
        summary: req.body.summary,
        description: req.body.description,
        createdAtTime: req.body.createdAtTime,
        owner: userId
    }

    try {
        const painting = await paintingsManager.createPainting(paintingData)

        res.status(201).json(painting)
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
})

module.exports = router