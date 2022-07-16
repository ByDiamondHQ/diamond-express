import { Response } from "express";

export function buildResponse(res: Response, statusCode: number, body: Record<string, unknown>, additionalHeaders?: Record<string, unknown>): Response {
    return res.status(statusCode).json(body)
}

export function success(res: Response, body: any, status = 200): Response {
    return buildResponse(res, status, { ...body, status: status });
}

export function failure(res: Response, body: any, status = 500): Response {
    return buildResponse(res, status, { ...body, status: status });
}

export function handleError(res: Response, error: any, message: string) {
    const m = error.message ?? message;
    const statusCode = error.statusCode ?? 500;
    return failure(res, { message: m }, statusCode);
}