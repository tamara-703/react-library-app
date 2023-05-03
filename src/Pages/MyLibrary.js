//Personal user library. This will display fav books, books read and books to read

import { useState } from "react"
import { Link } from "react-router-dom";
import Read from "./Read";
import Bookshelf from "./Bookshelf";

export default function MyLibrary({bookCollection})
{

    console.log("in my library");
    console.log(bookCollection);


    return (
        <div>
            <h1 className="mylibrary-header">My Books</h1>
                <ul className="mylibrary-list mylibrary-nav">
                    <li><Link to="/read">Read</Link></li>
                    <li><Link to="/currentlyreading">Currently reading</Link></li>
                    <li><Link to="/wanttoread">Want to read</Link></li>
                </ul>

        {bookCollection ? <Bookshelf bookCollection={bookCollection}/> : <h1>No books to display. Browse <Link to="/search">here!</Link></h1>}
        </div>
    )
}
