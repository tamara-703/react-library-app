import { useLocation } from "react-router-dom";
import { useState } from "react"


export default function CurrentlyReading({currentlyReading})
{
    console.log("in currently reading")
    console.log(currentlyReading)
    // const location = useLocation();

    // let state = location.state;

  //console.log(state[0].title)

  //const [currentlyreading, setCurrentlyReading] = useState([]);


  return (
    <div>
        {currentlyReading ? currentlyReading.map((item,index) => {
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
                    }) : <div>No information found</div>}
            </div>
)



}


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
