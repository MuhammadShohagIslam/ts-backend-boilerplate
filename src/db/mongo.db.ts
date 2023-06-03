import mongoose from 'mongoose'
import { errorLogger, logger } from '../shared/logger'

export const database_connection = async (uri: string) => {
  try {
    if (!uri) {
      errorLogger.info('mongo uri is not find!')
    }
    await mongoose.connect(uri)
    logger.info('mongodb database is running!')
  } catch (error) {
    if (error instanceof Error) {
      errorLogger.error(error.message)
    }
  }
}
