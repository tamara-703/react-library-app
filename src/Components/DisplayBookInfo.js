


export default function DisplayBookInfo({formData})
{
    console.log("in display info")
    console.log(formData)

    const printBookInfo = () => {
        return (
            <div>
                {formData.map((item,index) => {
                    return (
                        <div>
                            <h1>Title: {item.volumeInfo.title}</h1>
                            </div>
                    )
                })}
            </div>
        )
    }

    return (
        <div>
            {formData ? printBookInfo() : <div>no information found</div>}
        </div>
        // <div>
        //     {formData ? console.log(formData[0].volumeInfo): <div>no information to display</div>}
        // </div>
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
