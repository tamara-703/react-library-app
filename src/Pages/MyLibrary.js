//Personal user library. This will display fav books, books read and books to read

import { useState } from "react"

export default function MyLibrary(props)
{


    // title,
    //   subTitle: location.state.volumeInfo.subtitle,
    //   authors: location.state.volumeInfo.authors,
    //   averageRating: location.state.volumeInfo.averageRating,
    //   publisher: location.state.volumeInfo.publisher,
    //   publishedDate: location.state.volumeInfo.publishedDate,
    //   thumbnail: location.state.volumeInfo.thumbnail,


    return (
        <div>
            <h1>My library</h1>
            <div>
                {props.bookCollection ? props.bookCollection.map((item,index) => {
                    return console.log("Title:" + item.title)
                }): <div>No information found</div>}
            </div>
        </div>
    )
}


{/* <div>{
                    props.bookCollection.map((item,index) => {
                        return (
                            <div>
                                <ul>
                                    <li><img src={item.thumbnail} alt={item.title}></img></li>
                                    <li>Title: {item.title}</li>
                                    <li><i>{item.subtitle}</i></li>
                                    <li>Authors: {item.authors}</li>
                                    <li>Average rating: {item.averageRating}</li>
                                    <li>Publisher: {item.publisher}</li>
                                    <li>Published Date: {item.publishedDate}</li>
                                </ul>




                            </div>
                        )
                    })}</div>  */}
