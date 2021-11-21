import React from 'react'
import Shelf from '../Shelf/Shelf';
import { useNavigate } from "react-router-dom";
import { useShelfsContext } from '../../contexts/ShelfsContext';

function SearchButton() {
    const navigate = useNavigate();

    return (
        <div className="open-search">
            <button onClick={
                () => navigate("/search")
            }></button>
        </div>
    )
}

export default function ShelfsPage() {

    
    const { shelfsData } = useShelfsContext();
  
    return (
        <div>
                <header className="list-books-title">
                    <h1>My Reads</h1>
                </header>
                <div className="list-books-content">
                    {
                        Object.values(shelfsData).map((shelf, index) =>
                            <Shelf key={index} shelf={shelf} />
                        )
                    }
                </div>

                <SearchButton />
            </div>
    
    )
}
