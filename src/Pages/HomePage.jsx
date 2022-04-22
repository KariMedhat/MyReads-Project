import React from "react";
import BookShelf from "../components/BookShelf";
import { Link } from "react-router-dom";

const HomePage = ({ books, changeShelf }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {/* shelf */}
          <BookShelf
            section="Currently Reading"
            books={books}
            category="currentlyReading"
            changeShelf={changeShelf}
          />
          <BookShelf
            section="Want To Read"
            books={books}
            category="wantToRead"
            changeShelf={changeShelf}
          />
          <BookShelf
            section="Read"
            books={books}
            category="read"
            changeShelf={changeShelf}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search" className="search-link">
          Add a book
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
