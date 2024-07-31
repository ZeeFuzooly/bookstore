import { useCartStore } from '../stores/cartstore';
import CheckoutForm from '../components/CheckoutForm';

const Page = () => {
  // Get cart items from the store
  const items = useCartStore((state: { items: any; }) => state.items);

  // Calculate total price
  const totalPrice = items.reduce((total: number, item: { book: { price: number; }; quantity: number; }) => total + item.book.price * item.quantity, 0);

  return <CheckoutForm totalPrice={totalPrice} />;
};

export default Page;
