import create from "zustand";
import { mockBooks, Book } from '../__mocks__/booksMock';

interface BookStore {
  favourites: any;
  books: Book[];
  addBook: (book: Book) => void;
  addToFavourites: (book: Book) => void;
}

export const useBookStore = create<BookStore>((set: (arg0: (state: { books: any; }) => { books: any[]; }) => any) => ({
  books: mockBooks,
  favourites: [],
  addBook: (book: any) => set((state: { books: any; }) => ({ books: [...state.books, book] })),
  // addToFavourites: (book: Book) => set((state) => ({
  //   favourites: state.favourites.includes(book)
  //     ? state.favourites.filter((b: Book) => b !== book)
  //     : [...state.favourites, book]
  // })),
}));
