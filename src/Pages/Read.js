import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Read() {

  const [read, setRead] = useState([]);
  const location = useLocation();

  let state = location.state;

  console.log("in read")
  console.log(state[0])


//   function addBookFunction(newBook)
//   {
//     //console.log(newBook);
//       let oldBookCollection = bookCollection;

//       oldBookCollection = [...bookCollection, newBook];

//       setBookCollection(oldBookCollection);
//   }



//   useEffect(() => {
//         // let oldRead = read;

//         // oldRead = [...read, state[0]];
//         // setRead(oldRead)

//   }, [read])


  return (
    <div>

      {/* {location.state ? (
        location.state.map((item, index) => {
          return (
            <div>
              <ul>
                <li>
                  <img
                    src={item[index].thumbnail}
                    alt={item[index].title}
                  ></img>
                </li>
                <li>Title: {item[index].title}</li>
                <li>
                  <i>{item[index].subtitle}</i>
                </li>
                <li>Authors: {item[index].authors}</li>
                <li>Average rating: {item[index].averageRating}</li>
                <li>Publisher: {item[index].publisher}</li>
                <li>Published Date: {item[index].publishedDate}</li>
              </ul>
            </div>
          );
        })
      ) : (
        <div>No information found</div>
      )} */}
    </div>
  );
}

{
  /* <div>
      {bookCollection ? (
        bookCollection.map((item, index) => {
          return (
            <div>
              <ul>
                <li>
                  <img
                    src={item[index].thumbnail}
                    alt={item[index].title}
                  ></img>
                </li>
                <li>Title: {item[index].title}</li>
                <li>
                  <i>{item[index].subtitle}</i>
                </li>
                <li>Authors: {item[index].authors}</li>
                <li>Average rating: {item[index].averageRating}</li>
                <li>Publisher: {item[index].publisher}</li>
                <li>Published Date: {item[index].publishedDate}</li>
              </ul>
            </div>
          );
        })
      ) : (
        <div>No information found</div>
      )}
    </div> */
}
