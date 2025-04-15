import { getReviews } from "@/lib/api/data";
import { FiStar } from "react-icons/fi";

async function ReviewList({ bookId }: { bookId: string }) {
  const reviews = await getReviews(bookId);

  return (
    <div className="space-y-6">
      {reviews.map((review) => (
        <div key={review.id} className="p-4 border rounded-lg border-secondary">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex text-book-accent">
              {[...Array(5)].map((_, i) => (
                <FiStar
                  key={i}
                  className={`${i < review.rating ? "fill-current" : ""}`}
                />
              ))}
            </div>
            <span className="text-sm text-secondary">{review.date}</span>
          </div>
          <h3 className="font-medium text-primary">{review.title}</h3>
          <p className="text-secondary">{review.content}</p>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;
