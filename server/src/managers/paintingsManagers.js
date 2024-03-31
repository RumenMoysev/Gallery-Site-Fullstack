const Painting = require('../models/Painting.js')

const titleLength = 4
const summaryLength = 10
const descriptionLength = 20

function validate (paintingData) {
    if(paintingData.title.length < titleLength) {
        throw new Error(`Painting title should be at least ${titleLength} characters`)
    }

    if (!paintingData.imageUrl.startsWith('http://') && !paintingData.imageUrl.startsWith('https://')) {
        throw new Error('Please provie a valid image URL')
    }

    if (paintingData.summary.length < summaryLength) {
        throw new Error(`Painting summary should be at least ${summaryLength} characters`)
    }

    if (paintingData.description.length < descriptionLength) {
        throw new Error(`Painting description should be at least ${descriptionLength} characters`)
    }
}

exports.getAllPaintings = () => {
    try {
        return Painting.find({}, 'title imageUrl summary createdAtTime updatedAtTime _id')
    } catch (err) {
        throw new Error(err.message)
    }
}

exports.createPainting = (paintingData) => {
    try {
        validate(paintingData)

        return Painting.create(paintingData)
    } catch (err) {
        throw new Error(err.message)
    }
}