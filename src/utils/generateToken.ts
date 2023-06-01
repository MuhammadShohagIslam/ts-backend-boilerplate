import jwt from 'jsonwebtoken'
import config from '../config'

export const generateToken = <T extends object>(payload: T) => {
  const token = jwt.sign(payload, config.token_secret as string, {
    expiresIn: '7days',
  })

  return token
}
