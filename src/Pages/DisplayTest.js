import { useLocation, useParams } from "react-router-dom";


export default function DisplayTest(props) {

    console.log("in display test");

    const params = useParams();
    const location = useLocation();
    console.log(location)
    console.log(params)



    // const fromDisplay = location.state;
    // console.log("fromDisplay")
    // console.log(fromDisplay)

  return (
    <div>
      <h1>This is the page where book information will be displayed</h1>

      {/* {data ? (
        data.map((data, index) => {
          return (
            <div>
              <h1>Title: {data.volumeInfo.title}</h1>
              <h3>Subtitle: {data.volumeInfo.subtitle}</h3>
              <h5>Authors: {data.volumeInfo.authors}</h5>
              <h6>Categories: {data.volumeInfo.categories}</h6>
              <p>Description: {data.volumeInfo.description}</p>
            </div>
          );
        })
      ) : (
        <div>No information found</div>
      )} */}
    </div>
  );
}
