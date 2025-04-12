import dotenv from 'dotenv'
import mongoose from 'mongoose'

const env = dotenv.config().parsed

const connection = () => {
  mongoose.connect(env.MONGODB_URI, {
    dbName: env.MONGODB_DB_NAME,
  })

  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error:'))
  db.once('open', () => {
    console.log('Connected to MongoDB')
  })
}

export default connection
