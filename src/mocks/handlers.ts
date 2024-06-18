import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/resource', () => HttpResponse.json({ id: 'abc-123' })),
];
