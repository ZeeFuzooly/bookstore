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

export const useCartStore = create<CartStore>((set: (arg0: { (state: any): { items: any; }; (state: { items: any[]; }): { items: any[]; }; (state: { items: any[]; }): { items: any[]; }; }) => any) => ({
  items: [],
  addToCart: (book: { title: any; }) => set((state: { items: any[]; }) => {
    const existingItem = state.items.find((item: { book: { title: any; }; }) => item.book.title === book.title);
    if (existingItem) {
      return {
        items: state.items.map((item: { book: { title: any; }; quantity: number; }) =>
          item.book.title === book.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      };
    }
    return { items: [...state.items, { book, quantity: 1 }] };
  }),
  updateQuantity: (book: { title: any; }, quantity: any) => set((state: { items: any[]; }) => ({
    items: state.items.map(item =>
      item.book.title === book.title
        ? { ...item, quantity }
        : item
    )
  })),
  removeFromCart: (book: { title: any; }) => set((state: { items: any[]; }) => ({
    items: state.items.filter(item => item.book.title !== book.title)
  })),
}));
