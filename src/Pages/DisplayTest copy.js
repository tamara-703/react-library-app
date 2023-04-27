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



  const [book, setBook] = useState([]);
  const [review, setReview] = useState("");
  const [bookLocation, setBookLocation] = useState(null);

  useEffect(() => {
    if (book.length > 0) {
      props.addBookFunction(book);
    }
  }, [book]);

  useEffect(() => {
    props.homeBook ? GetAPI(props.homeBook).then((i) => {
      i ? setBookLocation(i.items[0].volumeInfo) : console.log("not found");
  }) : setBookLocation(location.state.volumeInfo)

  }, [])

  if(bookLocation)
  {
    bookData = [
    {
      title: bookLocation.title,
      subTitle: bookLocation.subtitle,
      authors: bookLocation.authors,
      averageRating: bookLocation.averageRating,
      publisher: bookLocation.publisher,
      publishedDate: bookLocation.publishedDate,
      thumbnail: bookLocation.imageLinks.thumbnail,
    },
  ];
  }

  console.log("testing booklocation")
  console.log(bookData)


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

       {bookLocation ? (
  <div>
    <div>Title: {bookLocation.title}</div>
    <div>Authors: {bookLocation.authors}</div>
    <div>Description: {bookLocation.description}</div>
    <div>Average rating: {bookLocation.averageRating}</div>
    <div>Publisher: {bookLocation.publisher}</div>
    <div>Published date: {bookLocation.publishedDate}</div>
    <aside>
      <img
        src={bookLocation.imageLinks.thumbnail}
        alt={bookLocation.title}
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






// {location.state ? (
//   <div>
//     <div>Title: {location.state.volumeInfo.title}</div>
//     <div>Authors: {location.state.volumeInfo.authors}</div>
//     <div>Description: {location.state.volumeInfo.description}</div>
//     <div>Average rating: {location.state.volumeInfo.averageRating}</div>
//     <div>Publisher: {location.state.volumeInfo.publisher}</div>
//     <div>Published date: {location.state.volumeInfo.publishedDate}</div>
//     <aside>
//       <img
//         src={location.state.volumeInfo.imageLinks.thumbnail}
//         alt={location.state.title}
//       ></img>
//     </aside>
//     <button onClick={handleRead}>Add to read</button>
//     <button onClick={handleCurrentlyReading}>Add to currently reading</button>
//     <button onClick={handleWantToRead}>Add to want to read</button>


//     <form onSubmit={handleReview}>
//     <h5>Write a review</h5>
//     <textarea ref={input} maxLength="150"></textarea>
//     <input type="submit" value="submit"></input>

//     </form>
//   </div>


// ) : (
//   <div>No information found</div>
// )}
