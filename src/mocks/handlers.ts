import { http, HttpResponse } from 'msw';
import { questions } from '@/mocks/fixtures/questions';
import { hobbies } from '@/mocks/fixtures/hobbies';
import { matchings } from '@/mocks/fixtures/matchings';
import { messages } from '@/mocks/fixtures/messages';
import { question_cards } from '@/mocks/fixtures/question_cards';
import { token } from '@/mocks/fixtures/auth_token';
import { user_hobbies } from '@/mocks/fixtures/user_hobbies';

export const handlers = [
  http.get('/resource', () => HttpResponse.json({ id: 'abc-123' })),
  http.get('/matching_questions', () => HttpResponse.json(questions)),
  http.get('/hobbies', () => HttpResponse.json(hobbies)),
  http.get('/matches', () => HttpResponse.json(matchings)),
  http.post('/matching_questions', () =>
    HttpResponse.json({
      matching_id: '3fa85f64-5717-4562-b3fc-2c963f66afa0',
      sender_user_id: '3fa85f64-5717-4562-b3fc-2c963f66afa1',
      receiver_user_id: '3fa85f64-5717-4562-b3fc-2c963f66afa2',
      match_date: new Date().toISOString(),
    })
  ),
  http.get('/messages/:matching_id', () => HttpResponse.json(messages)),
  http.get('/question_cards/:matching_id', () =>
    HttpResponse.json(question_cards)
  ),
  http.post('/auth/google', () => HttpResponse.json(token)),
  http.get('/user_hobbies/:user_id', () => HttpResponse.json(user_hobbies)),
];
