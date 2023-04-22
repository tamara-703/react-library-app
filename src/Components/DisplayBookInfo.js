


export default function DisplayBookInfo({formData})
{
    console.log("in display info")

    return (
        <div>
            {formData ? console.log(formData[0]): <div>no information to display</div>}
        </div>
    )
}


// formData.map((item, index) => {
//     return <div>
//         <h1>Title: {item.volumeInfo.title}</h1>
//         <h3>Subtitle: {item.volumeInfo.subtitle}</h3>
//         <h5>Authors: {item.volumeInfo.authors}</h5>
//         <h6>Categories: {item.volumeInfo.categories}</h6>
//         <p>Description: {item.volumeInfo.description}</p>
//     </div>
// })
