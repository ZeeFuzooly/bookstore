import create from 'zustand';

interface CartItem {
  book: {
    title: string;
    author: string;
    price: number;
    cover: string;
  };
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addToCart: (book: CartItem['book']) => void;
  updateQuantity: (book: CartItem['book'], quantity: number) => void;
  removeFromCart: (book: CartItem['book']) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addToCart: (book) => set((state) => {
    const existingItem = state.items.find(item => item.book.title === book.title);
    if (existingItem) {
      return {
        items: state.items.map(item =>
          item.book.title === book.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      };
    }
    return { items: [...state.items, { book, quantity: 1 }] };
  }),
  updateQuantity: (book, quantity) => set((state) => ({
    items: state.items.map(item =>
      item.book.title === book.title
        ? { ...item, quantity }
        : item
    )
  })),
  removeFromCart: (book) => set((state) => ({
    items: state.items.filter(item => item.book.title !== book.title)
  })),
}));
