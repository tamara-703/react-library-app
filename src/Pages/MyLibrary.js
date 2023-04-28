//Personal user library. This will display fav books, books read and books to read

import { useState } from "react"
import { Link } from "react-router-dom";
import Read from "./Read";

export default function MyLibrary({bookCollection})
{

    // console.log("in my library");
    // console.log(bookCollection);


    return (
        <div>
            <h1 className="mylibrary-header">My Books</h1>
                <ul className="mylibrary-list mylibrary-nav">
                    <li><Link to="/read">Read</Link></li>
                    <li><Link to="/currentlyreading">Currently reading</Link></li>
                    <li><Link to="/wanttoread">Want to read</Link></li>
                </ul>

        <Read bookCollection={bookCollection}/>
        </div>
    )
}


{/* <div>
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
            </div> */}
