const common = require('@root/config/common')

const PORT = process.env.PORT || 8000

const MONGODB_URI = 'mongodb+srv://fullstackuser:dbsalasana@cluster0.disc4ny.mongodb.net/phoneBookApp?retryWrites=true&w=majority'

module.exports = {
  ...common,
  PORT,
  MONGODB_URI,
}
