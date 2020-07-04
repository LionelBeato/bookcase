import { buildSchema, } from "https://cdn.pika.dev/graphql/^15.0.0";

const schema = buildSchema(`
    type Query {
        hello: String
        allBooks: [Book]
        bookById(title: String): Book
        bookByTitle(title: String): Book 
        booksByAuthor(firstName:String, lastName:String): [Book]
    }
    type Book {
        title: String
        author: Author
        publisher: String
        year: Int
        id: Int
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
`);
export default schema; 