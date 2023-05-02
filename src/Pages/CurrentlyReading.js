import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react"
import GetRating from "../Services/GetRating";
import './Pages.css'


export default function CurrentlyReading({currentlyReading})
{
    console.log("in currently reading")
    console.log(currentlyReading)


    const [deleted, setDeleted] = useState([]);

  useEffect(() => {
    setDeleted(currentlyReading);
  }, [deleted])

  const handleDelete = (e) => {

    const name = e.target.getAttribute("name");

    setDeleted(deleted.splice(name,1));
  }


  return (
    <div>
      <h1 className="status-header">Currently reading</h1>
        {currentlyReading ? currentlyReading.map((item,index) => {

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
                            <button name={index} onClick = {handleDelete}>Remove</button>
                    </div>
          );
        })
       : (
        <div>No information found</div>
      )}
    </div>


                        )

}


{/* <div>
                                <ul>
                                    <li><img src={item.thumbnail} alt={item.title}></img></li>
                                    <li>Title: {item.title}</li>
                                    <li><i>{item.subtitle}</i></li>
                                    <li>Authors: {item.authors}</li>
                                    <li>Average rating: {item.averageRating}</li>
                                    <li>Publisher: {item.publisher}</li>
                                    <li>Published Date: {item.publishedDate}</li>
                                </ul>
                            </div>
                        )
                    }) : <div>No information found</div>}
            </div> */}



{/* <div>
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
        })
      ) : (
        <div>No information found</div>
      )}
    </div> */}


 {/* {currentlyReading ? currentlyReading.map((item,index) => {
                    console.log(item.thumbnail)
                        return (
                            <div>
                                <ul>
                                    <li><img src={item.thumbnail} alt={item.title}></img></li>
                                    <li>Title: {item.title}</li>
                                    <li><i>{item.subtitle}</i></li>
                                    <li>Authors: {item.authors}</li>
                                    <li>Average rating: {item.averageRating}</li>
                                    <li>Publisher: {item.publisher}</li>
                                    <li>Published Date: {item.publishedDate}</li>
                                </ul>
                            </div>
                        )
                    }) : <div>No information found</div>} */}






// return (
//     <div>
//         {state ? state[0].map((item, index) => {
//     console.log("In currently reading state map " + item.title)
//     return (
//         <div>
//         <ul>
//             <li>
//               <img
//                 src={item.thumbnail}
//                 alt={item.title}
//               ></img>
//             </li>
//             <li>Title: {item.title}</li>
//             <li>
//               <i>{item.subtitle}</i>
//             </li>
//             <li>Authors: {item.authors}</li>
//             <li>Average rating: {item.averageRating}</li>
//           </ul>
//         </div>
//     )
// }) : <div>No information found </div>}

//     </div>
// )
