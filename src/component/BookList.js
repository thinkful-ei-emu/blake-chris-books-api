import React from 'react';
import Book from './Book'

function BookList(props){
    let newBooks = props.books.map(book =>
        <li>
            <Book thisbook={book} />
        </li>);
    return (
        <ul>
            {newBooks}
        </ul>
    )
}

export default BookList;