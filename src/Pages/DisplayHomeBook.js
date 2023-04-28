import { useEffect, useState } from "react";
import GetAPI from "../Components/GetAPI";
import GetRating from "../Services/GetRating";

export default function DisplayHomeBook(props) {
  console.log("in display home book");
  console.log(props.homeBook);

  const [book, setBook] = useState(null);

  useEffect(() => {
    props.homeBook
      ? GetAPI(props.homeBook).then((i) => {
          i ? setBook(i.items[0].volumeInfo) : console.log("not found");
        })
      : console.log("not found");
  }, []);

  let bookData = null;

  if (props.homeBook) {
    bookData = book;
  }

  console.log("Showing book data");
  console.log(bookData);

  return (
    <div>
      {bookData ? (
        <div>
          <div className="img-container">
            <img
              src={bookData.imageLinks.thumbnail}
              alt={bookData.title}
              width="300px"
            ></img>

            <div>
              <div className="displaytest-title">{bookData.title}</div>
              <div className="displaytest-author">
                Author: {bookData.authors}
              </div>
            </div>
          </div>

          <h1 className="displaytest-header">Description</h1>
          <article className="displaytest-description">
            <p>{bookData.description}</p>
          </article>

          <div className="container">
            <h1>Average Rating</h1>
            <div>
              <GetRating rating={bookData.averageRating} />
            </div>
          </div>

          <div className="container">
            <h1>Publisher</h1>
            <div className="displaytest-text">{bookData.publisher}</div>
          </div>

          <div className="container">
            <h1>Published Date</h1>
            <div className="displaytest-text">{bookData.publishedDate}</div>
          </div>
        </div>
      ) : (
        <div>no information found</div>
      )}
    </div>
  );
}
