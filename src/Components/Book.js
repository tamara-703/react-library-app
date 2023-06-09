
import {Link, useNavigate} from 'react-router-dom';
import Read from '../Pages/Read';
import DisplayHomeBook from '../Pages/DisplayHomeBook';

export default function Book(props) {

  const nav = useNavigate();

  function handlePrint()
  {

    props.setHomeBook(props.fiction.book);
    nav(`/displayhomebook/${props.fiction.book}`)
  }

  return (
    <div className="book">

        <span>
          <img src={props.fiction.thumbnail} alt={props.fiction.book} width= "150px" onClick={handlePrint} className='pop-img'></img>
          <b><p className="book-title">{props.fiction.book}</p></b>
        </span>
    </div>
  );
}
