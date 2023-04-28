import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import MyLibrary from "./MyLibrary";
import { useEffect, useRef, useState } from "react";
import CurrentlyReading from "./CurrentlyReading";
import GetAPI from "../Components/GetAPI";
import GetRating from "../Services/GetRating";

export default function DisplayTest(props) {

  console.log("In display test");


  const params = useParams();
  const location = useLocation();
  const input = useRef();

  const bookData = [
    {
      title: location.state.volumeInfo.title,
      subTitle: location.state.volumeInfo.subtitle,
      authors: location.state.volumeInfo.authors,
      averageRating: location.state.volumeInfo.averageRating,
      publisher: location.state.volumeInfo.publisher,
      publishedDate: location.state.volumeInfo.publishedDate,
      thumbnail: location.state.volumeInfo.imageLinks.thumbnail,
    },
  ];

  const [book, setBook] = useState([]);
  const [review, setReview] = useState("");
  const [bookLocation, setBookLocation] = useState(null);

  useEffect(() => {
    if (book.length > 0) {
      props.addBookFunction(book);
    }
  }, [book]);


  //add to my read list
  function handleRead() {
    console.log("getting read");
    console.log(bookData)
    setBook(bookData);
  }

  //add to my currently reading list
  function handleCurrentlyReading()
  {

    console.log("getting currently read")
    console.log(props.currentlyReading)

    let oldCurrentlyReading = props.currentlyReading;

    oldCurrentlyReading = [...props.currentlyReading, bookData[0]];

    props.setCurrentlyReading(oldCurrentlyReading);

  }

  //add to my want to read list
  function handleWantToRead()
  {
    let oldWantToRead = props.wantToRead;

    oldWantToRead = [...props.wantToRead, bookData[0]];

    props.setWantToRead(oldWantToRead);
  }

  //add a review
  function handleReview(event)
  {

    event.preventDefault();
      setReview();
  }

  return (
    <div>

      {location.state ? (
        <div>

          <div className="img-container">
            <img
              src={location.state.volumeInfo.imageLinks.thumbnail}
              alt={location.state.title} width="300px"
            ></img>

            <div>
            <div className="displaytest-title">{location.state.volumeInfo.title}</div>
            <div className="displaytest-author">Author: {location.state.volumeInfo.authors}</div>
              </div>
            </div>

            <h1 className="displaytest-header">Description</h1>
            <article className="displaytest-description">
              <p>{location.state.volumeInfo.description}</p>
            </article>

            <br></br>

            <div className="container">
            <h1>Average Rating</h1>
            <div><GetRating rating={location.state.volumeInfo.averageRating}/></div>
            </div>


          <div className="container">
          <h1>Publisher</h1>
          <div className="displaytest-text">{location.state.volumeInfo.publisher}</div>
          </div>


          <div className="container">
          <h1>Published Date</h1>
          <div className="displaytest-text">{location.state.volumeInfo.publishedDate}</div>
          </div>



          <br></br>
          <br></br>
          <br></br>


          <button onClick={handleRead}>Add to read</button>
          <button onClick={handleCurrentlyReading}>Add to currently reading</button>
          <button onClick={handleWantToRead}>Add to want to read</button>


          {/* <form onSubmit={handleReview}>
          <h5>Write a review</h5>
          <textarea ref={input} maxLength="150"></textarea>
          <input type="submit" value="submit"></input>

          </form> */}
        </div>


      ) : (
        <div>No information found</div>
      )}
    </div>
  );
}
{
  /* <li>Average rating: {item.averageRating}</li>
                <li>Publisher: {item.publisher}</li>
                <li>Published Date: {item.publishedDate}</li> */
}
