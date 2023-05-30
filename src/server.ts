import config from './config'
import app from './app'
import { database_connection } from './db/mongo.db'

const startServer = async () => {
  try {
    // database connection
    await database_connection(config.mongo_url as string)

    // server listening
    app.listen(config.port, () => {
      console.log(`Application Running on ${config.port}`)
    })
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
  }
}

startServer()
