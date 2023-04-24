import { useLocation, useParams } from "react-router-dom";


export default function DisplayTest(props) {

    console.log("in display test");

    const params = useParams();
    const location = useLocation();
    console.log(location)
    console.log(params)

  return (
    <div>
      <h1>This is the page where book information will be displayed</h1>

        {location.state ? <div>
            <div>Title: {location.state.volumeInfo.title}</div>
            <div>Authors: {location.state.volumeInfo.authors}</div>
            <aside>
                <img src= {location.state.volumeInfo.imageLinks.thumbnail} alt={location.state.title}></img>
            </aside>
        </div> : <div>No information found</div>}

    </div>
  );
}



// {location.state ? (
//     location.state.map((data, index) => {
//       return (
//         <div>
//           <h1>Title: {location.state.volumeInfo.title}</h1>
//           <h3>Subtitle: {location.state.volumeInfo.subtitle}</h3>
//           <h5>Authors: {location.state.volumeInfo.authors}</h5>
//           <h6>Categories: {location.state.volumeInfo.categories}</h6>
//           <p>Description: {location.state.volumeInfo.description}</p>
//         </div>
//       );
//     })
//   ) : (
//     <div>No information found</div>
//   )}
