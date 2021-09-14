import { HttpResponse } from "../protocols/https"

export const badRequest = (error: Error): HttpResponse => ({
    statusCode: 400,
    body: JSON.stringify(error)
});

export const forbidden = (error: Error): HttpResponse => ({
    statusCode: 403,
    body: JSON.stringify(error)
})

export const unauthorized = (): HttpResponse => ({
    statusCode: 401,
    body: null
})

export const serverError = (error: Error): HttpResponse => ({
    statusCode: 500,
    body: JSON.stringify(error)
})

export const ok = (data: any): HttpResponse => ({
    statusCode: 200,
    body: JSON.stringify(data)
})

export const created = (data: any, location?: string): HttpResponse => {

    const headers = location ? new Map<string, string>([["Location", location]]) : null;

    return {
        statusCode: 201,
        headers: headers,
        body: JSON.stringify(data),
    }
}

export const noContent = (): HttpResponse => ({
    statusCode: 204,
    body: null
})
