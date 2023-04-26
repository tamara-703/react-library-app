//Home page. Will display newly released books and recommendations
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
            <h3 className='new-releases'>Newly released</h3>
            <br></br>
            <h6>Fiction</h6>
            {Categories.map((item, index) => {
            return (
                <div>
                    {item.Fiction.map((fiction, idx) => {
                        return (
                            <div className='fiction-container'>
                                <span>
                                    <img src={fiction.thumbnail} alt={fiction.book}></img>
                                    <p>{fiction.book}</p>
                                </span>
                                </div>
                        )
                    })}
                </div>
            )
        }) }

        </div>
    )
}
