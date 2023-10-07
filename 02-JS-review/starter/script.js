const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//Destructuring
/*
const book = getBook(1);

// const title = book.title;
// const author = book.author;

const { title, author, pages, publicationDate, genres, hasMovieAdaption } =
  book;

console.log(author, title);

// destructuring arrays
const [primaryGenres, secondryGenre] = genres;
console.log(primaryGenres, secondryGenre);

//rest and spread operator

//rest
const [primary, secondry, ...other] = genres;
console.log(other);

//spread operator
const newGenres = [...genres, "Epic lauren asher"];
console.log(newGenres);

const upDateBook = {
  ...book,
  // adding new property
  moviePublicationDate: "2001-12-19",
  // overirding old
  pages: 1278,
};
upDateBook;

// Arrow function es6
// function getYear(str) {
//   return str.split("-")[0];
// }

const getYear = (str) => {
  return str.split("-")[0];
};

console.log(getYear(publicationDate));

// template literals
const summary = `${title} , a ${pages}-page long,was written by ${author} and is published in ${getYear(
  publicationDate
)} `;
summary;
// ternary operator in js
const pagesRange =
  pages > 1000 ? "over a thpusand woah" : "less than 1000 pretty wild huh";
console.log(`The book has ${pagesRange}`);

// short circuiting js
// And returns the false values until it finds it
let canRead = true && false;
console.log(canRead);
console.log(false && "Some string");
console.log(hasMovieAdaption && "This Book has a movie");
console.log("Harish" && "Some string");
console.log(0 && "Some string");

// OR short circuiting returns the true value when it finds it
console.log(true || false);
console.log(false || "Harish is a playboy very sexy");
console.log(book.translations.spanish || "not translated");

// sometimes 0  gets read as false and hence has consequences so we use nullish operaor
const countWrong = book.reviews.librarything.reviewsCount ?? "no data";
console.log(countWrong);

//optional chaining
function getTotalReviewcount(book) {
  const goodreads = book.reviews.goodreads?.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}
console.log(getTotalReviewcount(book));
*/
// functional array methods
// map method

const books = getBooks();

const x = [1, 2, 3, 4].map((el) => el * 2);
console.log(x);

const titles = books.map((book) => book.title);
console.log(titles);

const essentialData = books.map((book) => {
  return {
    title: book.title,
    author: book.author,
  };
});
essentialData;
//filter method js
const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooks;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;
//reduce method

const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
console.log(pagesAllBooks);

// sort method
const xt = [6, 5, 6, 7, 8, 9];
const sorted = xt.sort((a, b) => a - b);
console.log(sorted); // [6,6,7,8,9];
// it also changes the original array since it is not a functional method
const sortedPages = books.slice().sort((a, b) => b.pages - a.pages);

//immutable arrays

// adding
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber Of Secrets",
  author: "J K Rowling",
};

const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// delete book object from array

const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

//update a book object in the array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 12 } : book
);
booksAfterUpdate;
