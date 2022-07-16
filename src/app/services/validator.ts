import { NextFunction, Request, Response } from "express";
import { failure } from "../utils/http-responses";
import { signup, token, login } from "../validators/auth.schema";
import { globals } from "../validators/globals.schema";

const schemas = {
  globals,
  signup,
  token,
  login,
}

export const validateObject = async (schema: string, object: object) => {
  const s = schemas[schema]

  let response;

  try {
    response = await s.validate(object)
  } catch (e) {
    if (e.name === 'ValidationError') throw Error(e.message)
  }

  return response
}

export const validator = (schema: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const s = schemas[schema]

      await s.validate(req.body)
      
      next()
    } catch (e) {
      if (e.name === 'ValidationError') return failure(res, { error: e.message })

      return failure(res, { error: "Internal Server Error" })
    }
  }
}