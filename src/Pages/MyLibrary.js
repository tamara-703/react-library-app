//Personal user library. This will display fav books, books read and books to read

import { useState } from "react"
import { Link } from "react-router-dom";

export default function MyLibrary({bookCollection})
{

    console.log(bookCollection);

    return (
        <div>
            <h1>My library</h1>
            <nav>
                <Link to="/read" state={bookCollection}>Read</Link>
                <Link to="/currentlyreading">Currently reading</Link>
                <Link to="/wanttoread">Want to read</Link>
            </nav>
            <div>
                {bookCollection ? bookCollection.map((item,index) => {
                        return (
                            <div>
                                <ul>
                                    <li><img src={item[index].thumbnail} alt={item[index].title}></img></li>
                                    <li>Title: {item[index].title}</li>
                                    <li><i>{item[index].subtitle}</i></li>
                                    <li>Authors: {item[index].authors}</li>
                                    <li>Average rating: {item[index].averageRating}</li>
                                    <li>Publisher: {item[index].publisher}</li>
                                    <li>Published Date: {item[index].publishedDate}</li>
                                </ul>
                            </div>
                        )
                    }) : <div>No information found</div>}
            </div>
        </div>
    )
}


                    // bookCollection.map((item,index) => {
                    //     return console.log("Title:" + item[index].title)
                    // })
