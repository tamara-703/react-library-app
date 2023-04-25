import { useLocation } from "react-router-dom";
import { useState } from "react"

export default function WantToRead({wantToRead})
{

    return (
        <div>
            {wantToRead ? wantToRead.map((item, index) => {
        console.log("In want to read state map " + item.title)
        return (
            <div>
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
            </div>
        )
  }) : <div>No information found </div>}

        </div>
    )

}
