//fetch api

import { useState } from "react";
import DisplayBookInfo from "./DisplayBookInfo";


const GetAPI = async (data) => {
    console.log("in get api")
    //const [book, setBook] = useState(null);
    const url = `https://www.googleapis.com/books/v1/volumes?q=${data}`

    const response = await fetch(url);
    const bookData = response.json();

    return bookData;

    const printBookInfo = () => {
        bookData.then((info) => {
            console.log(info.items);
        })
    }




}

export default GetAPI;
