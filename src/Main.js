import React from "react"
import reactlogo from "./react-logo.png"


export default function Main() {
    return(
        <div className="maincontent">
        <h1>Fun facts about React</h1>
        <ul>
            <li> <p>Was first released in 2013</p></li>
            <li> <p>Was originally created by Jordan Walke</p></li>
            <li> <p>Has well over 100k stars on Github</p> </li>
            <li> <p>Is maintained by Facebook</p></li>
            <li> <p>Powers thousands of enterprise apps, including mobiles apps</p></li>
        </ul>
        <img src={reactlogo} alt=""/>
    </div>
    )
}

