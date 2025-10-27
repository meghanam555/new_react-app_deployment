import React from 'react'
import Nature from '../assets/Image.jpg'
import FishVideo from '../assets/Video1.mp4'

export default function Image1(){
    const stylesheet = {
    width:"500px",
    height:"650px",
    position:"relative",
    left:"250px"
    }
    return(
        <>
        <img src={Nature}></img><br></br><br></br>
        <video controls style={stylesheet}>
            <source src={FishVideo}></source>
        </video><br></br><br></br>
        <img src={Nature}></img><br></br><br></br>
        </>
    )
}
