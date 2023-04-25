import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import MyLibrary from "./MyLibrary";
import { useEffect, useState } from "react";


export default function DisplayTest(props) {

    console.log("In display test");

    const params = useParams();
    const location = useLocation();

    console.log(location);

    const bookData = [{
      title: location.state.volumeInfo.title,
      subTitle: location.state.volumeInfo.subtitle,
      authors: location.state.volumeInfo.authors,
      averageRating: location.state.volumeInfo.averageRating,
      publisher: location.state.volumeInfo.publisher,
      publishedDate: location.state.volumeInfo.publishedDate,
      thumbnail: location.state.volumeInfo.thumbnail,
    }]

    const [book, setBook] = useState([]);

    useEffect(() => {
      if(book.length > 0) {
        props.addBookFunction(book);
        console.log(book);
      }
    }, [book])


    //add to my library
    function handleAdd()
    {

      setBook(bookData);

    }

    //rate

    //add a review

  return (
    <div>
      <h1>This is the page where book information will be displayed</h1>

        {location.state ? <div>
            <div>Title: {location.state.volumeInfo.title}</div>
            <div>Authors: {location.state.volumeInfo.authors}</div>
            <aside>
                <img src= {location.state.volumeInfo.imageLinks.thumbnail} alt={location.state.title}></img>
            </aside>
            <button onClick={handleAdd}>Add to my library</button>
        </div> : <div>No information found</div>}


    </div>
  );
}
