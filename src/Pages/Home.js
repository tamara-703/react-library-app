//Home page. Will display newly released books and recommendations
import Book from '../Components/Book';
import Categories from '../Services/CategoryList';
import './Pages.css'

export default function Home({setHomeBook})
{
    return (
        <div className="home-page">
            <h1 className='new-releases'>Newly released</h1>
            <h4><i>The Newest Book Releases in Fiction, Nonfiction, Mystery & More!</i></h4>
            <br></br>
            <h2 className='genre'>Fiction</h2>
            {Categories.map((item, index) => {
            return (
                <div className='book-container'>
                    {item.Fiction.map((fiction, idx) => {
                        return (
                           <Book fiction={fiction} setHomeBook={setHomeBook}/>
                        )
                    })}
                </div>
            )
        }) }

            <h2 className='genre'>Non-Fiction</h2>
            {Categories.map((item, index) => {
            return (
                <div className='book-container'>
                    {item.NonFiction.map((fiction, idx) => {
                        return (
                           <Book fiction={fiction} setHomeBook={setHomeBook}/>
                        )
                    })}
                </div>
            )
        }) }

            <h2 className='genre'>Fantasy</h2>
            {Categories.map((item, index) => {
            return (
                <div className='book-container'>
                    {item.Fantasy.map((fiction, idx) => {
                        return (
                           <Book fiction={fiction} setHomeBook={setHomeBook}/>
                        )
                    })}
                </div>
            )
        }) }

            <h2 className='genre'>Mystery</h2>
            {Categories.map((item, index) => {
            return (
                <div className='book-container'>
                    {item.Mystery.map((fiction, idx) => {
                        return (
                           <Book fiction={fiction} setHomeBook={setHomeBook}/>
                        )
                    })}
                </div>
            )
        }) }


            <h2 className='genre'>Manga</h2>
            {Categories.map((item, index) => {
            return (
                <div className='book-container'>
                    {item.Manga.map((fiction, idx) => {
                        return (
                           <Book fiction={fiction} setHomeBook={setHomeBook}/>
                        )
                    })}
                </div>
            )
        }) }















        </div>
    )
}
