
import {Link, useNavigate} from 'react-router-dom';
import Read from '../Pages/Read';

export default function Book(props) {

  const nav = useNavigate();

  function handlePrint()
  {

    props.setHomeBook(props.fiction.book);
    nav(`/displaytest/${props.fiction.book}`)

  }

  return (
    <div className="book">

        <span>
          <img src={props.fiction.thumbnail} alt={props.fiction.book} width= "150px" onClick={handlePrint}></img>
          <b><p className="book-title">{props.fiction.book}</p></b>
        </span>
    </div>
  );
}
