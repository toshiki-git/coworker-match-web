export interface QuestionCard {
  id: string;
  question_card_id: string;
  question_card_text: string;
  is_used: boolean;
}

export interface QuestionCardsData {
  question_cards: QuestionCard[];
}
