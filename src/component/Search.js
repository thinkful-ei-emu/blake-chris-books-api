import React from 'react';

function Search(props) {
  return (
      <div>
        <form className="bookSearch" onSubmit={e => {
          e.preventDefault();
          props.bookApiCall(document.getElementById('search').value);
          }}>
            <label htmlFor="search">Seach:</label>
            <input type="text" name="search" id="search" placeholder="search" />
            <button type="submit" name="search">Submit</button>
        </form>
      </div>
  );
}

export default Search;