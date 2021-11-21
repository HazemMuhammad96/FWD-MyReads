import React, { useEffect } from 'react'
import { getAll, search } from '../data/api/BooksRequests'
import { removeDuplications } from "../utils/ArrayUtils";

export function useSearch(initialQuery) {
    const [searchQuery, setSearch] = React.useState(initialQuery);
    const [result, setResult] = React.useState([]);
    useEffect(() => {

        (async function () {
            try {
                if (searchQuery) {

                    let shelfedBooks = await getAll()
                    shelfedBooks = shelfedBooks.filter(it => it.title.toLowerCase().includes(searchQuery.toLowerCase()));
                    const data = await search(searchQuery);


                    setResult(data instanceof Array ? removeDuplications(shelfedBooks, data) : []);
                }
                else setResult([]);
            }
            catch (e) {
                console.error(e)
            }

        })();

    }
        , [searchQuery]);

    return [searchQuery, setSearch, result];
}