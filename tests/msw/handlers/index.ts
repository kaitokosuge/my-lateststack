import { http, HttpResponse, type RequestHandler } from 'msw';
import { mockPost } from './../mockData/post';

const sampleHandler = http.get(
    'https://jsonplaceholder.typicode.com/posts/1',
    () => {
        return HttpResponse.json(mockPost);
    },
);

export const handlers: RequestHandler[] = [sampleHandler];
