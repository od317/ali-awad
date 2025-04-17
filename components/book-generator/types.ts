export interface Character {
  id: string;
  type: "main" | "side";
  name: string;
  gender: "male" | "female";
  hairstyle: string;
  hairColor: string;
  eyeColor: string;
  skinColor: string;
  age: number;
}

export interface StoryOption {
  id: string;
  title: string;
  description: string;
  selected: boolean;
}

export interface BookTemplate {
  id: string;
  title: string;
  coverImage: string;
  description: string;
  reviews: {
    author: string;
    content: string;
    rating: number;
  }[];
  defaultCharacterOptions: {
    hairstyles: string[];
    hairColors: string[];
    eyeColors: string[];
    skinColors: string[];
  };
  storyOptions: StoryOption[];
}
