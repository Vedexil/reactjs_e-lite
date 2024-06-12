import React from "react";
import "./style.css"

export default function Test() {
    
    const switchTheme = (e) => {
        if(e.target.checked) {
            document.querySelector('body').setAttribute('data-theme', 'dark')
        }
        else {
            document.querySelector('body').setAttribute('data-theme', 'light')
        }
    }
    
    return (
        <>
        <div className="box">
        <h1 className="button">Use the toggle button to change the background!</h1>
        <label className="switch">
            <input type="checkbox" onChange={switchTheme}></input>
            <span className="slider round"></span>
        </label>
        </div>
        </>
    )
}
