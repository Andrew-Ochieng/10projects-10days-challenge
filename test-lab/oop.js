// const books ={
//     name: "Javascript",
//     author: "Brad Traversy"
// }


// console.log(books.name)
// console.log(books.author)


// constructor functions -ES5
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function () {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}


// instantiate an object
const book1 = new Book('Book one', 'John Doe', '2012')

const book2 = new Book('Book Two', 'Brad Traversy', '2022')

// print book1
const objects = document.getElementById("objects")
objects.innerHTML = book1.getSummary()

// print book2
const newObj = document.createElement('p')
objects.appendChild(newObj)
newObj.innerHTML = book2.getSummary()



// console.log(book1.title)
// console.log(book1.getSummary())
// console.log(book2.getSummary())




// prototypes - we want author, title & year for every book but not the getSummary
// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;

    
// }

// //getSummary
// Book.prototype.getSummary = function () {
//     return `${this.title} was written by ${this.author} in ${this.year}`
// }


// // instantiate an object
// const book1 = new Book('Book one', 'John Doe', '2012')
// const book2 = new Book('Book Two', 'Brad Traversy', '2022')


// console.log(book1.title)
// console.log(book1.getSummary())
// console.log(book2.getSummary())












