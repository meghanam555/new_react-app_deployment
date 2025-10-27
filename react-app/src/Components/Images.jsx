
export function Images(){
    const stylesheet = {
    width:"670px",
    height:"650px",
    position:"relative",
    left:"250px"
}
    return(
        <>
            <img src="Image.jpg"></img><br></br> <br></br> 
            <video controls style={stylesheet}>
                <source src="Video1.mp4" ></source>
            </video><br></br> <br></br> 
            <img src="ImageCar.webp"></img><br></br> <br></br> 
           

        </>
    )
}