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


// destructuring

// const book = getBook(1);
// book

// // const title = book.title
// // const author = book.author
// // author
// // title

// const {title,author,pages,publicationDate,genres,hasMovieAdaptation} = book;
// console.log(title,author,genres);

// // const primaryGenre = genres[0]
// // const secondaryGenre = genres[2]

// const [primaryGenre,secondaryGenre, ...otherGenres] = genres

// console.log(primaryGenre,secondaryGenre,otherGenres );

// const newGenres = [...genres,'epic fantasy']

// newGenres;

// const updatedBook = {
//   ...book,

//   // Adding a new property 
//   moviePublicationDate:"2001-12-19",

//   // overwriting a n existing property
//   pages:1220}

// updatedBook

// const summary = `${title}, is a book wriiten by ${author} with ${pages} and published in ${publicationDate.split("-")[0]}. The book  ${hasMovieAdaptation ? 'has' : 'not'} been adapted as a movie`
// summary


// const pagesRange = pages > 1000 ? 'over a thousand' : 'less than 1000'
// pagesRange

// console.log(`The book has ${pagesRange} pages`);


// const getTotalReviewCount = (book)=>{
//   const goodReads = book.reviews.goodreads.reviewsCount;
//   const librarything = book.reviews.librarything?.reviewsCount;
//   return goodReads + librarything
// }

// getTotalReviewCount(book)
// console.log(getTotalReviewCount(book));

// const books = getBooks();
// books

// const x  = [1,2,3,4,5,6].map((el)=>el*2)

// x

// const titles = books.map((book)=> book.title)

// titles;

// const essentialData = books.map((book)=>({
  
//     title:book.title,
//     author:book.author,
//   }))

//   essentialData

//   const longBooks = books
//   .filter((book)=>book.pages > 500)
//   .filter((book)=>book.hasMovieAdaptation)
//   longBooks

//   const adventureBooks = books.filter((book)=>
//     book.genres.includes('adventure')
//   ).map((book)=> book.title)

//   adventureBooks


// const pagesAllBooks = books.reduce((acc,book)=>acc + book.pages,0)

// pagesAllBooks

// const array = [1,2,7,9,5,4,36,25,4,6]


// const sortedArray = array.sort((a,b)=>a-b)

// sortedArray
// array

// const sortedByPages = books.slice().sort((a,b)=> b.pages - a.pages)
// sortedByPages

// // console.log(dfmk kdfkl ksdkdk k ck ck aovndfnkkxkk);fsdfadfa


// // console.log(dfmkkd fsdfnksdf kjdf kdnf)


// // 1) Add a book object to array

// const newBook = {
//   id:6,
//   title:"Harry Potter and the Chamber of Secrets",
//   author: "J.K. Rowling"
// }

// const booksAfterAdd = [...books,newBook]
// booksAfterAdd

// // 2) Remove a book object from array

// const booksAfterDelete = booksAfterAdd.filter(book=>book.id !== 3)
// booksAfterDelete

// // 3) update book object in the array

// const booksAfterUpadte = booksAfterDelete.map((book)=>book.id === 1 ? {...book,pages:1210}: book)

// booksAfterUpadte


// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then((res)=>res.json())
// .then((data)=>{
//   console.log(data);
  
// })

// console.log("kmskd jhjh jhhjhmnbkjhhkjhmnbjkh mbjkmnjb j kjh nbmbjkhkj jhkjh jkhkj cvvdfv");


const getTodos = async()=>{

  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  return data
} 

// console.log('cmdjfn mf,d,smf smdnf smdf');
const todos = getTodos();
console.log(todos);

console.log("lorembvncjfafjdfa conjdf buildibsnfkj jre ajcjkt this fkjhf foi rifht fnie jdjfkafdstaj jfd djfd dj")