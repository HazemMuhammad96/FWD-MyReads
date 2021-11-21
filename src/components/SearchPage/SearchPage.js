import React from 'react'
import Searchbar from '../SearchBar/Searchbar'
import SearchResults from '../SearchResult/SearchResults';
import Book from '../Book/Book';
import { useSearch } from '../../hooks/SearchHooks';


export default function SearchPage() {

    const [search, onSearch, result] = useSearch('');
    return (
        <div>
            <Searchbar value={search} onChange={onSearch} />
            <SearchResults>
                {result && result.map((book, index) => (
                    <li key={index}>
                        <Book book={book} />
                    </li>
                ))}
            </SearchResults>
        </div>
    )
}
