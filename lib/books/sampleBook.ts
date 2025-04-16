export interface BookPage {
  id: number;
  content: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  description: string;
  pages: BookPage[];
  metadata: {
    publisher: string;
    publishedDate: string;
    language: string;
    isbn: string;
    pagesCount: number;
  };
}

export const sampleBook: Book = {
  id: "atomic-habits",
  title: "Atomic Habits",
  author: "James Clear",
  coverImage: "/images/book-covers/atomic-habits.jpg",
  description:
    "No matter your goals, Atomic Habits offers a proven framework for improving every day. James Clear reveals practical strategies that will teach you how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
  metadata: {
    publisher: "Avery",
    publishedDate: "October 16, 2018",
    language: "English",
    isbn: "9780735211292",
    pagesCount: 320,
  },
  pages: [
    {
      id: 1,
      content: `<h1>Chapter 1: The Surprising Power of Atomic Habits</h1>
          <p>It was the smallest of changes that transformed my life. I didn't realize it at the time, but looking back, I can see how tiny adjustments led to remarkable outcomes.</p>
          <p>Habits are the compound interest of self-improvement. Getting 1 percent better every day counts for a lot in the long-run.</p>`,
    },
    {
      id: 2,
      content: `<h2>The Plateau of Latent Potential</h2>
          <p>We often expect progress to be linear. We imagine it will come quickly and easily. But the results of our efforts are often delayed.</p>
          <p>It's not until months or years later that we realize the true value of the previous work we have done.</p>`,
    },
    {
      id: 3,
      content: `<h2>Forget About Goals, Focus on Systems Instead</h2>
          <p>Goals are about the results you want to achieve. Systems are about the processes that lead to those results.</p>
          <p>If you're having trouble changing your habits, the problem isn't you. The problem is your system.</p>`,
    },
    // Add more pages as needed...
    {
      id: 4,
      content: `<h1>Chapter 2: How Your Habits Shape Your Identity</h1>
          <p>Behind every system of action is a system of beliefs. Behavior that is incongruent with the self will not last.</p>
          <p>You have the power to change your beliefs about yourself. Your identity is not set in stone.</p>`,
    },
  ],
};
