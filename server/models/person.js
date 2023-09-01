const mongoose = require('mongoose')

const url = process.env.MONGO

console.log(`connecting to ${url}`)  //eslint-disable-line

mongoose
  .connect(url)
  .then(() => {
    console.log('connected to MongoDB') //eslint-disable-line
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message) //eslint-disable-line
  })

const personSchema = new mongoose.Schema({
  name: { type: String, minlength: 3, required: true },
  number: {
    type: String,
    minlength: 8,
    required: true,
    validate: {
      validator(v) {
        return /^\d{2,3}-\d{4,}$/.test(v)
      },
      message: (props) => `${props.value} is not allowed!`,
    },
  },
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString() //eslint-disable-line
    delete returnedObject._id //eslint-disable-line
    delete returnedObject.__v //eslint-disable-line
  },
})

module.exports = mongoose.model('Person', personSchema)
