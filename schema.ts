import { buildSchema, } from "https://cdn.pika.dev/graphql/^15.2.0";

// TODO(): Add mutation
// TODO(): 
const schema = buildSchema(`
    type Query {
        hello: String
        nadia: String
        searchBooks(filter: String): [Book] 
        allBooks: [Book]
        bookById(title: String): Book
        bookByTitle(title: String): Book 
        booksByTitle(title: String): Book 
        booksByAuthor(firstName:String, lastName:String): [Book]
    }
    type Book {
        title: String
        author: Author
        publisher: String
        year: Int
        id: Int
        blurb: String
        slug: String
        color: String
    }

    input AuthorInput{
        firstName: String
        lastName:String
        id: Int
    }

    type Author{
        firstName: String
        lastName: String
        id: Int
    }
`, null);

export default schema; 