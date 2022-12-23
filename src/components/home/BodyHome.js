import "../../css/home/BodyHome.css"
import BodyBanner from "./BodyBanner"
import BodyFeatures from "./BodyFeatures"
import React from "react"

/** function that create the body area */
export default function Body(){
    return(
        <div className="body">
            <BodyBanner/>  
            <BodyFeatures/>  
        </div>
    )
}