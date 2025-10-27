import { Component } from "react";
import Data1 from "../assets/Data1.json";

export class NewJSON extends Component{
    render(){
        return(
            <>
                {
                    Data1.Items.map((Item)=>(
                        <>
                        <p>The Item name is: {Item.name}</p>
                        <p>The Item price is: {Item.price}</p>
                        </>
                    ))
                }
            </>
        )
    }
}