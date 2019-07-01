import React from 'react';

function Book(props) {
  return (
    <div>
        <img src={props.thisbook.volumeInfo.imageLinks.smallThumbnail} alt="book cover" />
        <p>{props.thisbook.volumeInfo.title}</p>
        <p>{props.thisbook.volumeInfo.authors && props.thisbook.volumeInfo.authors[0]}</p>
        {/* <p>{props.thisbook.saleInfo.listprice['amount']}</p> */}
        <p>{props.thisbook.volumeInfo.description}</p>
    </div>);

}

export default Book;
