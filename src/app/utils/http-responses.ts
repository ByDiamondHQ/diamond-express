import { SuccessResponseBody, FailureResponseBody } from "@/types/Response";
import { Response } from "express";

export function buildResponse(res: Response, statusCode: number, body: SuccessResponseBody | FailureResponseBody): Response {
  return res.status(statusCode).json(body)
}

export function success(res: Response, body: SuccessResponseBody, status = 200): Response {
  return buildResponse(res, status, body);
}

export function failure(res: Response, body: FailureResponseBody, status = 500): Response {
  return buildResponse(res, status, body);
}