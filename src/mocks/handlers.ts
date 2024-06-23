import { http, HttpResponse } from 'msw';
import { questions } from '@/mocks/fixtures/questions';
import { hobbies } from '@/mocks/fixtures/hobbies';
import { matchings } from '@/mocks/fixtures/matchings';

export const handlers = [
  http.get('/resource', () => HttpResponse.json({ id: 'abc-123' })),
  http.get('/questions', () => HttpResponse.json(questions)),
  http.get('/hobbies', () => HttpResponse.json(hobbies)),
  http.get('/matchings', () => HttpResponse.json(matchings)),
];
