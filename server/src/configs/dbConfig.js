const mongoose = require('mongoose')

const connectionURI = 'mongodb://127.0.0.1:27017/gallerySite'

async function dbConnect() {
    mongoose.connect(connectionURI);
}

module.exports = dbConnect