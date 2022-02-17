import "./body.css";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Body() 
{
    //useRef's from react
    const textRefer = useRef();
    const textRef = useRef();
    let nav = useNavigate();

    //use effects for ityped
    useEffect(() => {
        init(textRefer.current, {
            loop: false,
            showCursor: false,
            typeSpeed:  200,
            strings: ["Sort It!"],
        });
    }, []);

    useEffect(() => {
        init(textRef.current, {
            loop: false,
            showCursor: false,
            startDelay: 2500,
            strings: ["By: Julia, Devanshi, Jacob, Vikraj, Faris, Omar, Chris"],
        });
    }, []);

//H1 and H2 are the texts that are being typed while The rest are the buttons and joe mama
  return (
    <div className="body">
        <h1><span className="title" ref = {textRefer}></span></h1>
        <h2><span className="author" ref = {textRef}></span></h2> 
        <button className="button buttons" onClick={() => {nav("/Levels")}}>Play</button>
        <button className="button buttons">Options</button>
        <button className="button buttons">Quit</button>     
    </div>
  )
}
