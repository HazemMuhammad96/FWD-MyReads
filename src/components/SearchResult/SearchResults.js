import React from 'react'

export default function SearchResults({ children }) {
    return (
        <div className="search-books-results">
            <ol className="books-grid">
                {children}
            </ol>
        </div>
    )
}
