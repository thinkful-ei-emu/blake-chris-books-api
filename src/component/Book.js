import React from 'react';

function Book(props) {
  //console.log(`salability :${props.thisbook.saleInfo.saleability}, amount : ${props.thisbook.saleInfo.listPrice.amount} ${props.thisbook.saleInfo.listPrice.currencyCode}`);
  return (
    <div>
        <img src={props.thisbook.volumeInfo.imageLinks.smallThumbnail} alt="book cover" />
        <a href={props.thisbook.volumeInfo.infoLink}><p>{props.thisbook.volumeInfo.title}</p></a>
        <p>{props.thisbook.volumeInfo.authors && props.thisbook.volumeInfo.authors[0]}</p>
        {(props.thisbook.saleInfo.saleability === 'FOR_SALE') && <p>{props.thisbook.saleInfo.listPrice.amount}{props.thisbook.saleInfo.listPrice.currencyCode}</p>}
        <p>{props.thisbook.volumeInfo.description}</p>
    </div>
    );
}

export default Book;
