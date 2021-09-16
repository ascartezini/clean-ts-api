export type HttpResponse = {
    headers?: Map<string, string>;
    statusCode: number;
    body: any;
}

export type HttpRequest = {
    headers?: Map<string, string>;
    pathParameters?: any,
    queryStringParameters?: any,
    body?: any;    
}