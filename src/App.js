import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import SearchPage from "./Pages/SearchPage";

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books: [],
    search: "",
    booksFromSearch: [],
    loadSearch: false,
  };

  componentDidMount() {
    BooksAPI.getAll().then((res) => {
      this.setState({
        books: res,
      });
    });
  }

  changeShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    await BooksAPI.getAll().then((res) => {
      this.setState({
        books: res,
      });
    });
    this.handleBooksSearch(this.state.search)
  };

  handleSearch = async (event) => {
      await this.setState({
      search: event.target.value,
    });
    this.handleBooksSearch(this.state.search);
  };

  handleBooksSearch = async (search) => {
    await BooksAPI.search(search).then((res) => {
      if (res && !res.error) {
        this.setState({
          booksFromSearch: res.map((booksSearch) => {
            this.state.books.forEach((book) => {
              if (booksSearch.id === book.id) booksSearch.shelf = book.shelf
            })
            return booksSearch;
          }),
          loadSearch: true
        });
      } else {
        this.setState({
          booksFromSearch: `No Books Found ${this.state.search}`,
          loadSearch: false
        })
      }
    });
  };

  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route path="/search">
              <SearchPage
                handleSearch={this.handleSearch}
                search={this.state.search}
                booksFromSearch={this.state.booksFromSearch}
                changeShelf={this.changeShelf}
                loadSearch={this.state.loadSearch}
              />
            </Route>
            <Route path="/">
              <HomePage books={this.state.books} changeShelf={this.changeShelf} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default BooksApp;
