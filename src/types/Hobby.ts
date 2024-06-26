export interface Hobby {
  hobby_id: string;
  hobby_name: string;
}

export type HobbyCategory = {
  category_id: string;
  hobbies: Hobby[];
};

export interface Hobbies {
  games: HobbyCategory;
  indoor: HobbyCategory;
  music: HobbyCategory;
  outdoor: HobbyCategory;
  sports: HobbyCategory;
  technicalHobbies: HobbyCategory;
}
