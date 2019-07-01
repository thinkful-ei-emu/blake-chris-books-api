import React from 'react';

function Filter(props) {
  return (
      <div>
        <label htmlFor="print-type">Print Type:</label>
        <select name="print-type" onChange={e => {
            console.log('on channge worked');
            e.preventDefault();
            props.setPrintType(e.target.value);
            console.log(e.target.value);
          }       
        }>
            <option value="all">all</option>
            <option value="books">books</option>
            <option value="magazines">magazines</option>
        </select>
        <label htmlFor="book-type">Book Type:</label>
        <select name="book-type">
          <option></option>
          <option value="ebooks">ebooks</option>
          <option value="free-ebooks">free ebooks</option>
          <option value="full">full</option>
          <option value="paid-ebooks">paid ebooks</option>
          <option value="partial">partial</option>
        </select>
      </div>
  );
}

export default Filter;