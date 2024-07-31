import create from "zustand";

interface Book {
  category: string;
  title: string;
  author: string;
  cover: string;
  price: number;
}

interface BookStore {
  favourites: any;
  books: Book[];
  addBook: (book: Book) => void;
}

export const useBookStore = create<BookStore>((set) => ({
  books: [
    { title: "Book 1", author: "Author 1", cover: "https://cdn.vox-cdn.com/thumbor/KahloQJPIecC9OdMTTrK_f_-7jM=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21959422/jbareham_201014_1047_scifi_books_essentials_02.jpg", price: 10 , category:"Fiction" },
    { title: "Book 2", author: "Author 2", cover: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png", price: 10 ,category:"Fiction"},
    { title: "Book 3", author: "Author 3", cover: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png", price: 30 ,category:"Fiction"},
    { title: "Book 4", author: "Author 1", cover: "https://cdn.vox-cdn.com/thumbor/KahloQJPIecC9OdMTTrK_f_-7jM=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21959422/jbareham_201014_1047_scifi_books_essentials_02.jpg", price: 10 ,category:"Fiction"},
    { title: "Book 5", author: "Author 2", cover: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png", price: 10 ,category:"Non-Fiction"},
    { title: "Book 6", author: "Author 3", cover: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png", price: 50 ,category:"Academic"},
    { title: "Book 7", author: "Author 1", cover: "https://cdn.vox-cdn.com/thumbor/KahloQJPIecC9OdMTTrK_f_-7jM=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21959422/jbareham_201014_1047_scifi_books_essentials_02.jpg", price: 10, category:"Fiction" },
    { title: "Book 8", author: "Author 2", cover: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png", price: 100 , category:"Non-Fiction"},
    { title: "Book 9", author: "Author 3", cover: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png", price: 10 ,category:" Non-Fiction"},
    { title: "Book 8", author: "Author 2", cover: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png", price: 100 , category:"Non-Fiction"},
    { title: "Book 9", author: "Author 3", cover: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png", price: 10 ,category:" Non-Fiction"},
    { title: "Book 8", author: "Author 2", cover: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png", price: 100 , category:"Non-Fiction"},
    { title: "Book 9", author: "Author 3", cover: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png", price: 10 ,category:" Non-Fiction"},
    { title: "Book 8", author: "Author 2", cover: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png", price: 100 , category:"Non-Fiction"},
    { title: "Book 9", author: "Author 3", cover: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png", price: 10 ,category:" Non-Fiction"},
    { title: "Book 8", author: "Author 2", cover: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png", price: 100 , category:"Non-Fiction"},
    { title: "Book 9", author: "Author 3", cover: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png", price: 10 ,category:" Non-Fiction"},
    { title: "Book 8", author: "Author 2", cover: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png", price: 100 , category:"Non-Fiction"},
    { title: "Book 9", author: "Author 3", cover: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png", price: 10 ,category:" Non-Fiction"},
  ],
  addBook: (book) => set((state) => ({ books: [...state.books, book] })),
  favourites: [],
  addToFavourites: (book: any) => set((state) => ({
    favourites: state.favourites.includes(book)
      ? state.favourites.filter((b: any) => b !== book)
      : [...state.favourites, book]
  })),
}));

