export async function getRelatedBooks(currentBookId: string) {
  // Placeholder: return static data for now
  return [
    {
      id: "1",
      title: "The Alchemist",
      author: "Paulo Coelho",
      coverImage:
        "https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg",
    },
    {
      id: "2",
      title: "Atomic Habits",
      author: "James Clear",
      coverImage:
        "https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg",
    },
    {
      id: "3",
      title: "1984",
      author: "George Orwell",
      coverImage:
        "https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg",
    },
    {
      id: "4",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      coverImage:
        "https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg",
    },
  ];
}

export async function getReviews(bookId: string) {
  // Placeholder: static mock reviews
  return [
    {
      id: "r1",
      rating: 5,
      date: "2023-09-20",
      title: "Absolutely loved it!",
      content: "This book changed the way I think. A must-read.",
    },
    {
      id: "r2",
      rating: 4,
      date: "2023-10-05",
      title: "Very good, but not perfect",
      content: "Interesting ideas but a bit slow in the middle.",
    },
    {
      id: "r3",
      rating: 3,
      date: "2023-11-01",
      title: "Just okay",
      content: "Some parts were great, others felt repetitive.",
    },
  ];
}
