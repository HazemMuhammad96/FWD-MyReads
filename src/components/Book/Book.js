import React from 'react'
import classes from "./book.module.css"
import { ReactComponent as Bookmark } from '../../icons/book_bookmark.svg'
import ShelfChangerButton from './ShelfChangerButton/ShelfChangerButton'



export default function Book(
    { book }
) {





    return (
        <main>

            <div id={classes.bookContainer}>

                <Bookmark id={classes.bookmark} />

                <div id={classes.book}>
                    <aside />
                    <div id={classes.cover} style={{ background: book.imageLinks ? `url("${book.imageLinks.thumbnail}")` : "#efe" }} />
                </div>

                <ShelfChangerButton book={book} />
            </div>


            <div className={classes.bookTitle}>{book.title}</div>
            <div className={classes.bookAuthors}>
                {
                    book.authors && book.authors.map((author, index) => {
                        return (
                            <span key={index}>{`${author}, `}</span>
                        )
                    })
                }
            </div>
        </main>
    )
}
