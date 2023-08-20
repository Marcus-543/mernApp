const mongoose = require('mongoose')
const connectDatabase = () => {
    console.log("waite for connection database")
    mongoose.connect("mongodb+srv://user:user@cluster0.oemqmpn.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log("mongodb connected")).catch((error) => console.log(error))
}
module.exports = connectDatabase