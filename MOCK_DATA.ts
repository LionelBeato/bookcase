export interface Book {
    title:String;
    author:Author;
    publisher:String;
    year:Number;
    id:Number;
}

export interface Author {
    firstName:String;
    lastName:String;
    id:Number;
}

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

export let books = [
    {
        id: 1,
       title: `Slaughterhouse-Five`,
       author: authors[0],
       publisher: `bookPublisher`,
       year: 2000, 

   },
   {
       id: 2,
       title: `Harry Potter and The Sorcerer's Stone`,
       author: authors[1],
       publisher: `otherPublisher`,
       year: 2000, 

   },
]