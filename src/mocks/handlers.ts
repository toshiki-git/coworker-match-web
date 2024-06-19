import { http, HttpResponse } from 'msw';
import { questions } from '@/mocks/fixtures/questions';

export const handlers = [
  http.get('/resource', () => HttpResponse.json({ id: 'abc-123' })),
  http.get('/questions', () => HttpResponse.json(questions)),
];
