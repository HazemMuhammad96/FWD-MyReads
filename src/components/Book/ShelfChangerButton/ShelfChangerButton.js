import React from "react";
import { useShelfsContext } from "../../../contexts/ShelfsContext";

export default function ShelfChangerButton({ book }) {

    const { onShelfChanged } = useShelfsContext()

    function onChange(e) {
        onShelfChanged(book, e.target.value);
    }

    return (
        <div className="book-shelf-changer">
            <select onChange={onChange} value={book.shelf ?? "none"}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}