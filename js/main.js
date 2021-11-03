// get the ui element

let form = document.querySelector("#book-form");
let booklist = document.querySelector("#book-list");



// book class

class Book {
    constructor(title,author,isbn){

        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}


//UI class

class UI{

    static addBookList(book){

        let list = document.querySelector("#book-list");
        let row = document.createElement('tr');
        row.innerHTML = `
        <td> ${book.title} </td>
        <td> ${book.author} </td>
        <td> ${book.isbn} </td>
        <td> <a href="#" class="delete">x</a></td>`;


        list.appendChild(row);

    }

     static clearFields(){
        document.querySelector("#title").value = '';
        document.querySelector("#author").value = '';
        document.querySelector("#isbn").value = '';


    }

    static showAlart(message , className){

        let div =  document.createElement("div");
        div.className =`alart ${className}`;
        div.appendChild(document.createTextNode(message));

        let container = document.querySelector(".container");
        let form = document.querySelector("#book-form");
        container.insertBefore(div,form);
        //form.prepend(div);

        setTimeout(function(){
            document.querySelector(".alart").remove();
        },3000)

    }

    static deleteFromBook(target){
        if(target.hasAttribute('href')){
            target.parentElement.parentElement.remove();
            this.showAlart("book removeed!" , "success");
            
        }
    }

}





/// add event listener

form.addEventListener('submit',newBook);

booklist.addEventListener('click',removeBook);




// define function

function newBook(e){

    let title  = document.querySelector("#title").value;
    author =  document.querySelector("#author").value;
     isbn =  document.querySelector("#isbn").value;

    //let ui = new UI();   /// UI class ar modhe function static korar jonne. new class call create kora lagbe na..sorasori call kora jabe

     if(title ==="" || author ==="" || isbn ===""){

       // alert("'all fils");

       //ui.showAlart("Plase fill all the field !" , "error");
        UI.showAlart("Plase fill all the field !" , "error");


     }
     else{

        let book = new Book(title,author,isbn);

        

        // ui.addBookList(book);

        UI.addBookList(book);

        //console.log(book);

        // ui.clearFields();
         UI.clearFields();

        //  ui.showAlart("Book Added" , "success");
        UI.showAlart("Book Added" , "success");
     }
    e.preventDefault();
}


function removeBook(e){


    // let ui = new UI();
      
    // ui.deleteFromBook(e.target);
    UI.deleteFromBook(e.target);

    // ui.showAlart("book removeed!" , "success");

    e.preventDefault();
}