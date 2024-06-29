export interface MessagePair {
  me: {
    message_id: string;
    message_text: string;
    created_at: string;
    updated_at: string;
  };
  you: {
    message_id: string;
    message_text: string;
    created_at: string;
    updated_at: string;
  };
}

// Message interface
export interface Message {
  question_id: string;
  question_text: string;
  created_at: string;
  message_pair: MessagePair;
}

// MatchUser interface
export interface MatchUser {
  user_id: string;
  user_name: string;
  avatar_url: string;
}

// Main interface
export interface MainData {
  match_user: MatchUser;
  messages: Message[];
}
