import React from 'react';

function Filter() {
  return (
      <div>
        <label htmlFor="print-type">Print Type:</label>
        <select name="print-type">
            <option value="print"></option>
        </select>
        <label htmlFor="book-type">Book Type:</label>
        <select name="book-type">
            <option value="print"></option>
        </select>
      </div>
  );
}

export default Filter;