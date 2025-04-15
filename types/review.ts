export interface Review {
  id: string;
  rating: number; // 1 to 5
  date: string; // You could convert this to Date if needed
  title: string;
  content: string;
}
