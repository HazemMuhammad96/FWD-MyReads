import React from 'react'
import { getAll, update } from '../data/api/BooksRequests';

export function useShelfs(preDefinedShelfs) {

    const [shelfs, setShelfs] = React.useState(preDefinedShelfs);

    React.useEffect(() => {
        (async function fetchBooks() {
            try {
                const books = await getAll();

                //group books based on their shelf
                const groupedBooks = books.reduce((acc, book) => {
                    if (!acc[book.shelf]) {

                        acc[book.shelf] = {
                            id: book.shelf,
                            name: book.shelf,
                            books: []
                        };

                    }
                    acc[book.shelf].books.push(book);
                    return acc;
                }, shelfs);

                setShelfs({ ...groupedBooks });
            }
            catch (error) {
                console.error(error);
            }

        })();

    }, []);

    function changeShelf(book, newShelf) {

        (async function () {

            try {

                const prevShelf = book.shelf;
                const updatedShelfs = { ...shelfs };
                if (prevShelf) updatedShelfs[prevShelf].books = updatedShelfs[prevShelf].books.filter(b => b.id !== book.id);

                await update(book, newShelf);

                const newBook = { ...book, shelf: newShelf };
                if(newShelf !== "none") updatedShelfs[newShelf].books.push(newBook);
                setShelfs(updatedShelfs);

            } catch (error) {
                console.error(error);
            }
        })()
    }

    return [shelfs, changeShelf];
}