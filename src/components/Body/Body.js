import "./body.css";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Body() 
{

    const textRef = useRef();
    let nav = useNavigate();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Julia, Devanshi, Jacob, Vikraj, Faris, Omar, Chris"],
        });
    }, []);

  return (
    <div className="body">
        <h1><span className="title">Sort It!</span></h1>
        <h2>By: <span className="author" ref = {textRef}></span></h2> 
        <button className="button buttons" onClick={() => {nav("/L3/index.js")}}>Play</button>
        <button className="button buttons">Options</button>
        <button className="button buttons">Quit</button>     
    </div>
  )
}
