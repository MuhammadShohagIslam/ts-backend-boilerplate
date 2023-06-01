/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { Request, Response, NextFunction } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { responseReturn } from '../utils/responseReturn'
import config from '../config'

interface CustomRequest extends Request {
  role?: string
  id?: string
}

export const authMiddleware = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const accessToken = req.cookies

  if (!accessToken) {
    responseReturn<{ error: string }>(res, 409, {
      error: 'Please login first!',
    })
  }
  try {
    const decodedToken = (await jwt.verify(
      accessToken,
      config.token_secret as string
    )) as JwtPayload
    req.role = decodedToken.role as string
    req.id = decodedToken.id as string
    next()
  } catch (error) {
    responseReturn<{ error: string }>(res, 409, {
      error: 'Please login first!',
    })
  }
}
