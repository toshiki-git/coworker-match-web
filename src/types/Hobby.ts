export interface Hobby {
  hobby_id: string;
  hobby_name: string;
}

export interface HobbiesWithCategory {
  indoor: Hobby[];
  games: Hobby[];
  technicalHobbies: Hobby[];
  sports: Hobby[];
  outdoor: Hobby[];
  music: Hobby[];
}
