import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import MyLibrary from "./MyLibrary";
import { useEffect, useRef, useState } from "react";
import CurrentlyReading from "./CurrentlyReading";
import GetAPI from "../Components/GetAPI";

export default function DisplayTest(props) {

  // console.log("In display test");


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

  useEffect(() => {
    props.homeBook ? GetAPI(props.homeBook) : 
  }, [])

  //add to my read list
  function handleRead() {
    console.log("getting read");
    // console.log(book)
    setBook(bookData);
  }

  //add to my currently reading list
  function handleCurrentlyReading()
  {

    let oldCurrentlyReading = props.currentlyReading;

    oldCurrentlyReading = [...props.currentlyReading, bookData[0]];

    props.setCurrentlyReading(oldCurrentlyReading)

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
      <h1>This is the page where book information will be displayed</h1>

      {location.state ? (
        <div>
          <div>Title: {location.state.volumeInfo.title}</div>
          <div>Authors: {location.state.volumeInfo.authors}</div>
          <div>Description: {location.state.volumeInfo.description}</div>
          <div>Average rating: {location.state.volumeInfo.averageRating}</div>
          <div>Publisher: {location.state.volumeInfo.publisher}</div>
          <div>Published date: {location.state.volumeInfo.publishedDate}</div>
          <aside>
            <img
              src={location.state.volumeInfo.imageLinks.thumbnail}
              alt={location.state.title}
            ></img>
          </aside>
          <button onClick={handleRead}>Add to read</button>
          <button onClick={handleCurrentlyReading}>Add to currently reading</button>
          <button onClick={handleWantToRead}>Add to want to read</button>


          <form onSubmit={handleReview}>
          <h5>Write a review</h5>
          <textarea ref={input} maxLength="150"></textarea>
          <input type="submit" value="submit"></input>

          </form>
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
