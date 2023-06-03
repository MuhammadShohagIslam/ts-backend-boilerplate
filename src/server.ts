import config from './config'
import app from './app'
import { database_connection } from './db/mongo.db'
import { errorLogger, logger } from './shared/logger'

const startServer = async () => {
  try {
    // database connection
    await database_connection(config.mongo_url as string)

    // server listening
    app.listen(config.port, () => {
      logger.info(`Application Running on ${config.port}`)
    })
  } catch (error) {
    if (error instanceof Error) {
      errorLogger.error(error.message)
    }
  }
}

startServer()
