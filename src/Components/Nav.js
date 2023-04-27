//Navigation component that acts as a dashboard for all main links
import './Components.css'
import { Link } from "react-router-dom";

export default function Nav()
{
    return (
        <div className="nav">
            <Link to='/'>Home</Link>
            <Link to='/mylibrary'>My library</Link>
            <Link to='/search'>Search</Link>
            <Link to="/searchbycategory">Search by category</Link>
        </div>
    )
}
