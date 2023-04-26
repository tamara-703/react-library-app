//main search hub. This page will contain the search engine

import { useRef, useState } from "react"
import GetAPI from '../Components/GetAPI'
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
        const data = input.current.value;

        //const bookData = "";
        const info = GetAPI(data);

        console.log("back to search")

        info.then((i) => {
            i ? setFormData(i.items) : console.log("not found");
        })

    }

    const handleChange = (event) => {
        console.log(event.target.value);
        setFormData(event.target.value);
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
                <div>Filter by</div><select>
                    <option>Free e-books</option>
                    <option>Paid e-books</option>
                    <option>all</option>
                </select>
            </form>
            {formData ? <DisplayBookInfo formData = {formData} /> : <div></div>}
        </div>
    )
}

// onChange={handleChange}
//value={formData}
