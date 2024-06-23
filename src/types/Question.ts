export interface Question {
  question_id: string;
  question_text: string;
  choice1: {
    choice_text: string;
    choice_image_url: string;
  };
  choice2: {
    choice_text: string;
    choice_image_url: string;
  };
}
