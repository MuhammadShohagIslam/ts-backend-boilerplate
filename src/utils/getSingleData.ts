/* eslint-disable @typescript-eslint/no-explicit-any */
import { Model } from 'mongoose'

export const getSingleDataByEmail = async (model: Model<any>, data: string) => {
  const result = await model.findOne({ email: data })
  return result
}

export const getSingleDataById = async (model: Model<any>, data: string) => {
  const result = await model.findById({ id: data })
  return result
}
