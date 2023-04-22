import { useState } from "react";


export default function Test(props)
{
    console.log("in get api")
    const [book, setBook] = useState(null);

    
    const getApi = async () => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${props.data}`).then(
        (r) => {
            r.json();

        }
    ).then((r) => {
        setBook(r)
    })
}

    return (
        <div>
            {book ? console.log(book) : <div>not found</div>}
        </div>
    )

}
