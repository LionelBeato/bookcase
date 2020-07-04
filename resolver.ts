/* resolvers are our functions that will perform an appropiate action
 * here, we can see that our hello property simply returns "Hello world!"
 * 
 */
 import {books, Book, Author, authors} from './MOCK_DATA.ts'; 


const root = {
    hello: () => {
        return 'Hello world!';
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
    booksByAuthor: (author:Author) => {
        let map = books
                      .filter(element => element.author.firstName === author.firstName 
                                || element.author.lastName === author.lastName);
        console.log(map);
        return map; 
    },
    allBooks: () => {
        return books; 
    }, 

};

export default root; 