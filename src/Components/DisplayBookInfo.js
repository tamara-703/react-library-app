import {Link} from 'react-router-dom'
import DisplayTest from '../Pages/DisplayTest'
import { useState } from 'react'


export default function DisplayBookInfo({formData})
{
    console.log("in display info")
    console.log(formData)

    const printTitle = () => {
        return (
            <div>
                {formData.map((item,index) => {
                    return (
                        <div>
                            <Link to={`/displayTest/${item.volumeInfo.title}`} state={item}>
                                <h1 key={index}>Title: {item.volumeInfo.title}</h1>
                                </Link>

                            {/* <h1 key={index} onClick={passToDiplayInfo(item)}>Title: {item.volumeInfo.title}</h1> */}
                            </div>
                    )
                })}
            </div>
        )
    }

    // const passToDiplayInfo = (data) => {
    //     return (
    //         <div>
    //             <DisplayTest data={data} />
    //         </div>
    //     )
    // }

    return (
        <div>
            {formData ? printTitle() : <div>no information found</div>}

        </div>
        // <div>
        //     {formData ? console.log(formData[0].volumeInfo): <div>no information to display</div>}
        // </div>
    )
}


// formData.map((item, index) => {
//     return <div>
//         <h1>Title: {item.volumeInfo.title}</h1>
//         <h3>Subtitle: {item.volumeInfo.subtitle}</h3>
//         <h5>Authors: {item.volumeInfo.authors}</h5>
//         <h6>Categories: {item.volumeInfo.categories}</h6>
//         <p>Description: {item.volumeInfo.description}</p>
//     </div>
// })


// <div>
//                 {formData.map((item,index) => {
//                     console.log("displaying item in map function")
//                     console.log(item)
//                     return (
//                         <div>
//                             <Link
//                             to="/displayTest"

//                             >
//                                 <h1 key={index}>Title: {item.volumeInfo.title}</h1>
//                                 </Link>
//                             </div>
//                     )
//                 })}
//             </div>
