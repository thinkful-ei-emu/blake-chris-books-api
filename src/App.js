import React from 'react';
import BookList from './component/BookList';
import Search from './component/Search';
import Filter from './component/Filter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      printType: null,
      filterState: null,
      books: [],
      error: null
    }
  }

  setPrintType = (value) => {
    this.setState({printType : value});
    console.log('printtype changed');
  }

  setBookType = (value) => {
    this.setState({filterState : value});
    console.log('filterState changed');
  }



  bookApiCall = (search) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${search}${this.state.filterState ? `&filter=${this.state.filterState}`:''}&maxResults=10${this.state.printType ?`&printType=${this.state.printType}`:''}&key=AIzaSyAi0p4a2Xxej6GN4FVrflr4A7Iy1WO3kTU`;
    //          'https://www.googleapis.com/books/v1/volumes?q=cheese&filter=full&maxResults=10&printType=books&key=[YOUR_API_KEY]'
    //                       https://www.googleapis.com/books/v1/volumes?q=cheese&maxResults=10&printType=full&key=AIzaSyAi0p4a2Xxej6GN4FVrflr4A7Iy1WO3kTU 
    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error('Your imput was not valid, please try again');
        }
        return res.json();
        })
      .then(data => {
        this.setState({books: data.items});
        console.log(this.state.books);
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
          <Filter setPrintType={this.setPrintType} setBookType={this.setBookType} />
        </header>
        <BookList books={this.state.books} />
      </main>
    );
  }
}

export default App;
