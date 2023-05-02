import { Link } from "react-router-dom";
import GetRating from "../Services/GetRating";

export default function Bookshelf({bookCollection})
{

    return (
        <div className="read-container">

          {bookCollection ? (
            bookCollection.map((item, index) => {
              return (
                <div>
                  <div className="header-container">
                    <p>Cover</p>
                    <p>Title</p>
                    <p>Author</p>
                    <p>Average Rating</p>
                  </div>
                  <div className="read-list">
                    <div>
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        width="200px"
                        height="300px"
                      ></img>
                    </div>
                    <div className="title-list">
                      <p className="title">{item.title}</p>
                      <li>{item.subtitle}</li>
                    </div>
                    <div className="author">{item.authors}</div>
                    <div className="avg-rating">
                      <GetRating rating={item.averageRating} />
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div>No information found</div>
          )}
        </div>
      );
    }
