

const mongoose = require('mongoose');
const config = require('config');

const connectToDatabase = async () => {
    try {
        await mongoose.connect(
            config.get('mongoURL'),
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            }
        );
        console.log("Mongoose DB is connected......")
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}
module.exports = connectToDatabase