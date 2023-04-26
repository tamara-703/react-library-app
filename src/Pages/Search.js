//main search hub. This page will contain the search engine

import { useRef, useState } from "react"
import GetAPI from '../Components/GetAPI'
import GetAPIFree from '../Components/GetAPIFree'
import GetAPIPaid from '../Components/GetAPIPaid'
import Test from "../Components/Test";
import DisplayBookInfo from "../Components/DisplayBookInfo";

export default function Search()
{
    const [formData, setFormData] = useState([]);
    const input = useRef();


    const handleSubmit = (event) => {
        //fetch api on submit
        event.preventDefault();
        console.log("in handlesubmit")
        const data = input.current.value; //search term

        const info = GetAPI(data);

        console.log("back to search")

        info.then((i) => {
            i ? setFormData(i.items) : console.log("not found");
        })

    }

    const handleFree = (event) => {
        event.preventDefault();

        console.log("in handle free")

        const data = input.current.value; //search term

        const info = GetAPIFree(data);

        console.log("back to search")

        info.then((i) => {
            i ? setFormData(i.items) : console.log("not found");
        })

    }

    const handlePaid = (event) => {
        event.preventDefault();

        console.log("in handle free")

        const data = input.current.value; //search term

        const info = GetAPIPaid(data);

        console.log("back to search")

        info.then((i) => {
            i ? setFormData(i.items) : console.log("not found");
        })

    }

    return (
        <div>
            <h1>Search books</h1>
            <form onSubmit={handleSubmit}>
                <input type="text"
                        name="search"
                        placeholder="enter book name"
                        ref={input}/>
                <input type="submit" value="search"/>
                <div>All</div><input type="checkbox" value="free" onClick={handleSubmit}></input>
                <div>Free</div><input type="checkbox" value="free" onClick={handleFree}></input>
                <div>Paid</div><input type="checkbox" value="paid" onClick={handlePaid}></input>
            </form>
            {formData ? <DisplayBookInfo formData = {formData} /> : <div></div>}
        </div>
    )
}

// onChange={handleChange}
//value={formData}
