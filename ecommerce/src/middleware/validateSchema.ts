import { NextFunction, Request, Response } from "express";
import { Schema } from "zod";

export const validateSchemaMiddleware = (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
  try {
    const validated = schema.parse(req.body)

    res.locals.validated = validated

    next()
  } catch (error: any) {
    res.status(422).json({
      error: error.errors.map((item: any) => ({
        field: item.path[0],
        message: item.message
      }))
    })
    return
  }
}