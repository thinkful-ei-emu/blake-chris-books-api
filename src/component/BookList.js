import React from 'react';
import Book from './Book'

function BookList(props){
    let newBooks = props.books.map((book, index)=>
        <li key={index}>
            <Book thisbook={book} />
        </li>);
    return (
        <ul>
            {newBooks}
        </ul>
    )
}

export default BookList;