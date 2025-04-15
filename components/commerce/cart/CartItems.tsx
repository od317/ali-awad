import CartItem from "./CartItem";

export default function CartItems() {
  // Sample data - replace with real data
  const cartItems = [
    {
      id: "1",
      title: "Atomic Habits",
      author: "James Clear",
      price: 27.99,
      quantity: 1,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg",
    },
    {
      id: "2",
      title: "The Psychology of Money",
      author: "Morgan Housel",
      price: 22.5,
      quantity: 2,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg",
    },
    
  ];

  return (
    <div className="border border-secondary rounded-lg divide-y divide-secondary">
      {cartItems.length > 0 ? (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <div className="p-8 text-center">
          <p className="text-secondary">Your cart is empty</p>
        </div>
      )}
    </div>
  );
}
