import React from "react";
import Books from "../components/Books";

const BookShelf = ({ section, books, category, changeShelf }) => {
  const booksCategory = books.filter((book) => book.shelf === category);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{section}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksCategory.map((book) => (
            <Books key={book.id} book={book} changeShelf={changeShelf} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
