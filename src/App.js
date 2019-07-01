import React from 'react';
import BookList from './component/BookList';
import Search from './component/Search';
import Filter from './component/Filter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      error: null
    }
  }

  bookApiCall = (search) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyAi0p4a2Xxej6GN4FVrflr4A7Iy1WO3kTU`
    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error('Your imput was not valid, please try again');
        }
        return res.json();
        })
      .then(data => {
          console.log(data);
        })
      .catch(err => {
        this.setState({
          error: err.message
        });
        })
      }

  render() {
    return (
    <main className='App'>
      <header>
        <h1>Google Book Search</h1>
        <Search bookApiCall={this.bookApiCall} />
        <Filter />
      </header>
      {/* <BookList /> */}
    </main>
    );
  }
}

export default App;
