export interface Book {
    title:String;
    author:Author;
    publisher:String;
    year:Number;
    id:Number;
    slug:String; 
    blurb:String; 
}

export interface Author {
    firstName:String;
    lastName:String;
    id:Number;
}

// TODO(): find out if there's a way to make these objects
//         of type "Author" and "Book", 
//         I may need to make these interfaces classes instead
// TODO(): add more author objects
export let authors = [
    {
        id: 1,
        firstName: `Kurt`,
        lastName: `Vonnegut`
    },
    {
        id: 2,
        firstName: `Joanne`,
        lastName: `Rowling`
    }
]

// TODO(): add more book objects
export let books = [
    {
        id: 1,
       title: `Slaughterhouse-Five`,
       author: authors[0],
       publisher: `bookPublisher`,
       year: 2000, 
       slug: `SLGHTR-5`,
       blurb:
       `Selected by the Modern Library as one of the 100 best novels of all time, Slaughterhouse-Five, an American classic, is one of the world's great antiwar books. Centering on the infamous firebombing of Dresden, Billy Pilgrim's odyssey through time reflects the mythic journey of our own fractured lives as we search for meaning in what we fear most.`

   },
   {
       id: 2,
       title: `Harry Potter and The Sorcerer's Stone`,
       author: authors[1],
       publisher: `otherPublisher`,
       year: 2000, 
       slug: `SLGHTR-5`,
       blurb:
       `Selected by the Modern Library as one of the 100 best novels of all time, Slaughterhouse-Five, an American classic, is one of the world's great antiwar books. Centering on the infamous firebombing of Dresden, Billy Pilgrim's odyssey through time reflects the mythic journey of our own fractured lives as we search for meaning in what we fear most.`

   },
   {
       id: 3,
       title: `Harry Potter and The Goblet of Fire`,
       author: authors[1],
       publisher: `otherPublisher`,
       year: 2000, 
       slug: `SLGHTR-5`,
       blurb:
       `Selected by the Modern Library as one of the 100 best novels of all time, Slaughterhouse-Five, an American classic, is one of the world's great antiwar books. Centering on the infamous firebombing of Dresden, Billy Pilgrim's odyssey through time reflects the mythic journey of our own fractured lives as we search for meaning in what we fear most.`

   },
   
]