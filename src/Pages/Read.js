import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MyLibrary from "./MyLibrary";

export default function Read({ bookCollection }) {
  //state must be set to a useState and then the state of that useState should be displayed
  console.log("in read");
  console.log(bookCollection);

  return (
    <div>
      {bookCollection ? (
        bookCollection.map((item, index) => {
          return (
            <div>
              <ul>
                <li>
                  <img src={item.thumbnail} alt={item.title}></img>
                </li>
                <li>Title: {item.title}</li>
                <li>
                  <i>{item.subtitle}</i>
                </li>
                <li>Authors: {item.authors}</li>
                <li>Average rating: {item.averageRating}</li>
                <li>Publisher: {item.publisher}</li>
                <li>Published Date: {item.publishedDate}</li>
              </ul>
            </div>
          );
        })
      ) : (
        <div>No information found</div>
      )}
    </div>
  );
}

// return (
//     <div>

//     {state ? state[0].map((item, index) => {
//         console.log("In read state map " + item.title)
//         return (
//             <div>
//             <ul>
//                 <li>
//                   <img
//                     src={item.thumbnail}
//                     alt={item.title}
//                   ></img>
//                 </li>
//                 <li>Title: {item.title}</li>
//                 <li>
//                   <i>{item.subtitle}</i>
//                 </li>
//                 <li>Authors: {item.authors}</li>
//                 <li>Average rating: {item.averageRating}</li>
//               </ul>
//             </div>
//         )
//   }) : <div>No information found </div>}

//       {/* {location.state ? (
//         location.state.map((item, index) => {
//           return (
//             <div>
//               <ul>
//                 <li>
//                   <img
//                     src={item[index].thumbnail}
//                     alt={item[index].title}
//                   ></img>
//                 </li>
//                 <li>Title: {item[index].title}</li>
//                 <li>
//                   <i>{item[index].subtitle}</i>
//                 </li>
//                 <li>Authors: {item[index].authors}</li>
//                 <li>Average rating: {item[index].averageRating}</li>
//                 <li>Publisher: {item[index].publisher}</li>
//                 <li>Published Date: {item[index].publishedDate}</li>
//               </ul>
//             </div>
//           );
//         })
//       ) : (
//         <div>No information found</div>
//       )} */}
//     </div>
//   );

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
