import { useLocation } from "react-router-dom";
import { useState } from "react";
import GetRating from "../Services/GetRating";

export default function WantToRead({wantToRead})
{

    return (
        <div>
            {wantToRead ? wantToRead.map((item, index) => {
        console.log("In want to read state map " + item.title)
        return (

          <div>
              <h1 className="status-header">Want To Read</h1>
              <div className="header-container">
              <p>Cover</p><p>Title</p><p>Author</p><p>Average Rating</p>
                </div>

            <div className="read-list">
                <div>
                  <img src={item.thumbnail} alt={item.title} width="200px" height="300px"></img>
                </div>
                <div className="title-list">
                <p className="title">{item.title}</p>
                  <li>
                    {item.subtitle}
                  </li>
                </div>
                <div className="author">{item.authors}</div>
                <div className="avg-rating"><GetRating rating={item.averageRating}/></div>
            </div>
            </div>
          );
        }) : <div>No information found </div>}

        </div>
    )

}




{/* <div>
            <ul>
                <li>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                  ></img>
                </li>
                <li>Title: {item.title}</li>
                <li>
                  <i>{item.subtitle}</i>
                </li>
                <li>Authors: {item.authors}</li>
                <li>Average rating: {item.averageRating}</li>
              </ul>
            </div> */}
