export interface Book {
  title: String;
  author: Author;
  publisher: String;
  year: Number;
  id: Number;
  blurb: String;
  slug: String;
  color: String;
}

export interface Author {
  firstName: String;
  lastName: String;
  id: Number;
}

// TODO(): find out if there's a way to make these objects
//         of type "Author" and "Book",
//         I may need to make these interfaces classes instead
// TODO(): add more author objects
export let authors = [
  {
    id: 1,
    firstName: `Kurt`,
    lastName: `Vonnegut`,
  },
  {
    id: 2,
    firstName: `Joanne`,
    lastName: `Rowling`,
  },
];

// TODO(): add more book objects
export let books = [
  {
    id: 1,
    title: `Slaughterhouse-Five`,
    author: authors[0],
    publisher: `bookPublisher`,
    year: 2000,
    slug: `SLGTR-5`,
    blurb: `is book is good`,
    color: `orange`,
  },
  {
    id: 2,
    title: `Harry Potter and The Sorcerer's Stone`,
    author: authors[1],
    publisher: `otherPublisher`,
    year: 2000,
    slug: `SLGTR-5`,
    blurb: `is book is good`,
    color: `red`,
  },
  {
    id: 3,
    title: `Harry Potter and The Goblet of Fire`,
    author: authors[1],
    publisher: `otherPublisher`,
    year: 2000,
    slug: `SLGTR-5`,
    blurb: `is book is good`,
    color: `red`,
  },
  {
    id: 3,
    title: `Frankenstein`,
    author: authors[1],
    publisher: `otherPublisher`,
    year: 2000,
    slug: `SLGTR-5`,
    blurb: `is book is good`,
    color: `green`,
  },
  {
    id: 4,
    title: `Of Mice and Men`,
    author: authors[1],
    publisher: `otherPublisher`,
    year: 2000,
    slug: `SLGTR-5`,
    blurb: `is book is good`,
    color: `gold`,
  },
  {
    id: 5,
    title: `Lord of The FLies`,
    author: authors[1],
    publisher: `otherPublisher`,
    year: 2000,
    slug: `SLGTR-5`,
    blurb: `is book is good`,
    color: `blue`,
  },
  {
    id: 6,
    title: `The Great Gatsby`,
    author: authors[1],
    publisher: `otherPublisher`,
    year: 2000,
    slug: `SLGTR-5`,
    blurb: `is book is good`,
    color: `purple`,
  },
  {
    id: 7,
    title: `Brave New World`,
    author: authors[1],
    publisher: `otherPublisher`,
    year: 2000,
    slug: `SLGTR-5`,
    blurb: `is book is good`,
    color: `grey`,
  },
  {
    id: 8,
    title: `Charlie and The Chocolate Factory`,
    author: authors[1],
    publisher: `otherPublisher`,
    year: 2000,
    slug: `SLGTR-5`,
    blurb: `is book is good`,
    color: `red`,
  },
  {
    id: 9,
    title: `Harry Potter and The Goblet of Fire`,
    author: authors[1],
    publisher: `otherPublisher`,
    year: 2000,
    slug: `SLGTR-5`,
    blurb: `is book is good`,
    color: `red`,
  },
  {
    id: 10,
    title: `Harry Potter and The Goblet of Fire`,
    author: authors[1],
    publisher: `otherPublisher`,
    year: 2000,
    slug: `SLGTR-5`,
    blurb: `is book is good`,
    color: `red`,
  },
];
