//Home page. Will display newly released books and recommendations
import Book from '../Components/Book';
import Categories from '../Services/CategoryList';
import './Pages.css'

export default function Home()
{

    function printFiction()
    {
        Categories.map((item, index) => {
            return (
                <div>
                    {item.Fiction.map((fiction, idx) => {
                        return (
                            <div>
                                <div>{fiction.thumbnail}</div>
                                <div>{fiction.book}</div>
                                </div>

                        )
                    })}
                </div>
            )
        })
    }

    function printNonFiction()
    {

    }

    function printFantasy()
    {

    }

    function printMystery()
    {

    }

    function printManga()
    {

    }



    return (
        <div className="home-page">
            <h1>Home page</h1>
            <h1 className='new-releases'>Newly released</h1>
            <br></br>
            <h4>Fiction</h4>
            {Categories.map((item, index) => {
            return (
                <div className='book-container'>
                    {item.Fiction.map((fiction, idx) => {
                        return (
                           <Book fiction={fiction} />
                        )
                    })}
                </div>
            )
        }) }

            <h4>Non-Fiction</h4>
            {Categories.map((item, index) => {
            return (
                <div className='book-container'>
                    {item.NonFiction.map((fiction, idx) => {
                        return (
                           <Book fiction={fiction} />
                        )
                    })}
                </div>
            )
        }) }

            <h4>Fantasy</h4>
            {Categories.map((item, index) => {
            return (
                <div className='book-container'>
                    {item.Fantasy.map((fiction, idx) => {
                        return (
                           <Book fiction={fiction} />
                        )
                    })}
                </div>
            )
        }) }

            <h4>Mystery</h4>
            {Categories.map((item, index) => {
            return (
                <div className='book-container'>
                    {item.Mystery.map((fiction, idx) => {
                        return (
                           <Book fiction={fiction} />
                        )
                    })}
                </div>
            )
        }) }


            <h4>Manga</h4>
            {Categories.map((item, index) => {
            return (
                <div className='book-container'>
                    {item.Manga.map((fiction, idx) => {
                        return (
                           <Book fiction={fiction} />
                        )
                    })}
                </div>
            )
        }) }















        </div>
    )
}
