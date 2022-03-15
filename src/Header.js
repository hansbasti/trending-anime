import React from "react"

export default function Header (){
    return (
        <div className="nav-container">
            <img className="nav-logo" src="./images/logo.png" />
            <div className="nav-texts">
                <h3 className="nav-items">ANIME</h3>
                <h3 className="nav-items">MANGA</h3>
                <h3 className="nav-items">COMMUNITY</h3>
                <h3 className="nav-items">INDUSTRY</h3>
                <h3 className="nav-items">WATCH</h3>
                <h3 className="nav-items">READ</h3>
                <h3 className="nav-items">HELP</h3>
            </div>
            
        </div>
    )
}