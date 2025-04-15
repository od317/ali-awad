"use client";

export default function AddToCartButton({
  productId,
  className = "",
}: {
  productId: string;
  className?: string;
}) {
  const handleAddToCart = () => {
    // Add to cart logic here
    console.log("Added to cart:", productId);
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`py-3 px-6 rounded-lg font-bold transition-colors ${className}`}
    >
      Add to Cart
    </button>
  );
}
