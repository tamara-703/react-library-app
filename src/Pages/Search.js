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
    const [allChecked, setAllChecked] = useState(false);
    const [FreeChecked, setFreeChecked] = useState(false);
    const [PaidChecked, setPaidChecked] = useState(false)
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
        setFreeChecked(true)

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
        setPaidChecked(true)

        console.log("in handle free")

        const data = input.current.value; //search term

        const info = GetAPIPaid(data);

        console.log("back to search")

        info.then((i) => {
            i ? setFormData(i.items) : console.log("not found");
        })

    }

    return (
        <div className="search-page">
            <h1>Search books</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-outline">
                <input type="text"
                        name="search"
                        placeholder="enter book name"
                        ref={input}/>
                <input type="submit" value="search" className="btn btn-primary"/>
                </div>
                <div className="checkbox-container">
                <div>All</div><input type="checkbox" value="free" onClick={handleSubmit}></input>
                <div>Free</div><input type="checkbox" value="free" onClick={handleFree} checked={FreeChecked}></input>
                <div>Paid</div><input type="checkbox" value="paid" onClick={handlePaid} checked={PaidChecked}></input>
                </div>
            </form>
            {formData ? <DisplayBookInfo formData = {formData} /> : <div></div>}
        </div>
    )
}

// onChange={handleChange}
//value={formData}
