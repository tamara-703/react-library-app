export default function Book({fiction}) {

  return (
    <div className="book">

        <span>
          <img src={fiction.thumbnail} alt={fiction.book} width= "150px"></img>
          <p className="book-title">{fiction.book}</p>
        </span>
    </div>
  );
}
