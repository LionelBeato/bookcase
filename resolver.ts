/* resolvers are our functions that will perform an appropiate action
 * here, we can see that our hello property simply returns "Hello world!"
 * 
 */
 import {books, Book, Author, authors} from './MOCK_DATA.ts'; 


const root = {
    // arrow function
    // anonymous function
    hello: () => {
        return 'Hello world!';
    },
    nadia: () => {
        return 'Hello Nadia'; 
    },
    bookById: (book:Book) => {
        let found = books
                        .find(({id}) => id === book.id);
        console.log(found);
        console.log(`searching with: ${book.id}`);
        return found; 
    },
    bookByTitle: (book:Book) => {
        let found = books
        .find(({title}) => title === book.title);
        console.log(found);
        console.log(`searching with: ${book.title}`);
        return found; 
    },
    booksByTitle: (book:Book) => {

                        let found = books
                        .filter(element => element.title === book.title);
        console.log(found);
        console.log(`searching with: ${book.title}`);
        return found; 
    },
    booksByAuthor: (author:Author) => {
        // is there a neater way to do this?
        // how do we ensure the parameter names are treated as one object? 
        // maybe use an &&? 
        let map = books
                      .filter(element => element.author.firstName === author.firstName 
                                || element.author.lastName === author.lastName);

                               
        console.log(map);
        return map; 
    },
    allBooks: () => {
        return books; 
    },
    allAuthors: () => {
        return authors; 
    }

};

export default root; 