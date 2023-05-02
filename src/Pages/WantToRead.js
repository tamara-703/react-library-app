import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import GetRating from "../Services/GetRating";

export default function WantToRead({wantToRead})
{

  const [deleted, setDeleted] = useState([]);

  useEffect(() => {
    setDeleted(wantToRead);
  }, [deleted])

  const handleDelete = (e) => {

    const value = e.target[e.target.selectedIndex].value;

    if(value === 'default')
    {
      return;
    }

    setDeleted(deleted.splice(value, 1));

  }

    return (
        <div>
          <h1 className="status-header">Want To Read</h1>
          <select id="delete-options" onChange={(e) => {handleDelete(e)}}>
        <option value="default">Select a book to delete</option>
        {deleted ? (
        deleted.map((item, index) => {
          return (
                <option value={index}>{item.title}</option>
          );
        })
      ) : (
        <div>no books to display</div>
      )}
      </select>
            {deleted ? deleted.map((item, index) => {
        return (

          <div>
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
