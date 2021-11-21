import React from 'react'
import Book from "../Book/Book"
export default function Shelf({ shelf }) {



    return (
        <div className="bookshelf">
                <h2 className="bookshelf-title">
                    {shelf.name}
                </h2>

            <div className="bookshelf-books">
                <div className="books-grid">
                    {
                        shelf.books && shelf.books.map((item, index) => (
                            <Book key={index} book={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
