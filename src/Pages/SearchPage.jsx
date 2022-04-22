import React from "react";
import Searching from "../components/Searching";
import { Link } from "react-router-dom";

const SearchPage = ({
  handleSearch,
  booksFromSearch,
  changeShelf,
  loadSearch,
}) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={handleSearch}
          />
        </div>
      </div>
      {/* shelf */}
      <Searching
        booksFromSearch={booksFromSearch}
        changeShelf={changeShelf}
        loadSearch={loadSearch}
      />
    </div>
  );
};

export default SearchPage;
