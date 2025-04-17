import { BookTemplate } from "@/components/book-generator/types";

export const adventureTemplate: BookTemplate = {
  id: "fantasy-adventure",
  title: "Fantasy Adventure Generator",
  coverImage: "/images/book-covers/adventure-template.jpg",
  description:
    "Create your own custom fantasy adventure story. Design your hero, add companions, and choose the plot elements that will shape your unique tale.",
  reviews: [
    {
      author: "BookLover42",
      content:
        "Such a fun way to create a personalized story! My kids loved seeing characters that look like them in the book.",
      rating: 5,
    },
    {
      author: "CreativeWriter",
      content:
        "Great tool for overcoming writer's block. The generated story served as perfect inspiration.",
      rating: 4,
    },
  ],
  defaultCharacterOptions: {
    hairstyles: [
      "Short",
      "Long",
      "Braided",
      "Ponytail",
      "Curly",
      "Spiky",
      "Bald",
    ],
    hairColors: ["Black", "Brown", "Blonde", "Red", "White", "Blue", "Pink"],
    eyeColors: ["Brown", "Blue", "Green", "Hazel", "Gray", "Amber"],
    skinColors: ["Light", "Fair", "Medium", "Olive", "Tan", "Brown", "Dark"],
  },
  storyOptions: [
    {
      id: "magic-discovery",
      title: "Magic Discovery",
      description: "The protagonist discovers they have magical abilities",
      selected: false,
    },
    {
      id: "ancient-prophecy",
      title: "Ancient Prophecy",
      description: "The story revolves around an ancient prophecy",
      selected: false,
    },
    // Add 18 more story options...
    {
      id: "final-battle",
      title: "Epic Final Battle",
      description: "The climax features an epic battle",
      selected: false,
    },
  ],
};
