import { useLocation } from "react-router-dom";



export default function CurrentlyReading()
{
    const location = useLocation();

    console.log("in currently reading")
    console.log(location.state);


    return (
        <div></div>
    )
}
