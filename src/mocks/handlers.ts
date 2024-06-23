import { http, HttpResponse } from 'msw';
import { questions } from '@/mocks/fixtures/questions';
import { hobbies } from '@/mocks/fixtures/hobbies';
import { matchings } from '@/mocks/fixtures/matchings';

export const handlers = [
  http.get('/resource', () => HttpResponse.json({ id: 'abc-123' })),
  http.get('/questions', () => HttpResponse.json(questions)),
  http.get('/hobbies', () => HttpResponse.json(hobbies)),
  http.get('/matchings', () => HttpResponse.json(matchings)),
  http.post('/questions', () =>
    HttpResponse.json({
      matching_id: '3fa85f64-5717-4562-b3fc-2c963f66afa0',
      sender_user_id: '3fa85f64-5717-4562-b3fc-2c963f66afa1',
      receiver_user_id: '3fa85f64-5717-4562-b3fc-2c963f66afa2',
      match_date: new Date().toISOString(),
    })
  ),
];
