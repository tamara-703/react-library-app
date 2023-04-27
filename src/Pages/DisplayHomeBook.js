import { useEffect, useState } from "react";
import GetAPI from "../Components/GetAPI";

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

  if(props.homeBook)
  {
    bookData = book;
  }

  console.log("Showing book data")
  console.log(bookData)

  return (
    <div>
      {bookData ? (
        <div>
          <div>Title: {bookData.title}</div>
          <div>Authors: {bookData.authors}</div>
          <div>Description: {bookData.description}</div>
          <div>Average rating: {bookData.averageRating}</div>
          <div>Publisher: {bookData.publisher}</div>
          <div>Published date: {bookData.publishedDate}</div>
          <aside>
            <img
              src={bookData.imageLinks.thumbnail}
              alt={bookData.title}
            ></img>
          </aside>
        </div>
      ) : (
        <div>no information found</div>
      )}
    </div>
  );
}
