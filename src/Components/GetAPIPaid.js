//fetch api

import { useState } from "react";
import DisplayBookInfo from "./DisplayBookInfo";


const GetAPI = async (data) => {
    console.log("in get api")
    //const [book, setBook] = useState(null);
    const url = `https://www.googleapis.com/books/v1/volumes?q=${data}=paid-ebooks`

    const response = await fetch(url);
    const bookData = response.json();

    return bookData;

    // const info = fetch(url)
    // .then((response) => { response.json() })
    // .then((bookData) => {return bookData});

    const printBookInfo = () => {
        bookData.then((info) => {
            console.log(info.items);
        })
    }

    //printBookInfo();





    //     const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${data}`);

    //     const bookData = response.json();



}

export default GetAPI;



// export default function GetAPI({data})
// {
//     console.log("in getapi")
//     console.log(data)
//     // const [bookData, setBookData] = useState(null);

//     // const getBook = async () =>
//     // {
//     //     const response = await fetch (`https://www.googleapis.com/books/v1/volumes?q=${book}`);

//     //     const data = response.json();

//     //     setBookData(data);
//     // }

//     return (
//         <div>
//             {data ? console.log(data) : <div>No books to display</div>}
//         </div>
//     )


// }
