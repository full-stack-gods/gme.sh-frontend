import { useState } from "react";
import Select from "react-select";
import "./Form.css";

import Rocket from "../res/images/rocketExample.png"

const expirationOptions = [
    { value: "30s",   label: "30 Seconds" },
    { value: "1h",    label: "1 Hour" },
    { value: "Never", label: "Never" }
]

function Form() {

    const [shortenedLinkData, setShortenedLinkData] = useState(null);

    const handleSubmit = event => {
        event.preventDefault();
        console.log("Handle on submit");
        
        // fetch("https://jsonplaceholder.typicode.com/posts")
        // .then(data => (data.json()))
        // .then(setShortenedLinkData)
        const newShortenedLinkData = {
            Success: true,
            Message: "Test",
            ShortUrl: {},
        }

        if (newShortenedLinkData.Success) {
            document.querySelector("#form button").classList.add("animation")
        }

        setShortenedLinkData(newShortenedLinkData)
    }

    return (
        <div className="Form">
            <form onSubmit={handleSubmit} id="form">
                <div className="centralRow">
                    <div className="cube-1">
                        <input className="side front" type="text" name="url" placeholder="Url" id="urlInput" />
                        <div className="side left"></div>
                        <div className="side right"></div>
                        <div className="side top"></div>
                        <div className="side bottom"></div>
                    </div>
                    <button type="submit" className="submitButton"><img src={Rocket} /></button>
                </div>
                <p>{shortenedLinkData != null ? shortenedLinkData.Message : "-"}</p>
            </form>
        </div>
    )
}

export default Form;