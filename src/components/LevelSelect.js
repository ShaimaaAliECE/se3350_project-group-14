import React from 'react';
import { useNavigate } from "react-router-dom";
import "./Body/body.css";


const LevelSelect = ({ title }) => {
    
    let navigate1 = useNavigate();

    const routeChangeL1 = () => {
        let path = `/L1`;
        navigate1(path);
    }
    const routeChangeL2 = () => {
        let path = '/L2';
        navigate1(path);
    }
    const routeChangeL3 = () => {
        let path = '/L3';
        navigate1(path);
    }
    const routeChangeMenu = () =>{
        navigate1('/');
    }

    return (

        <>
            <div className = 'body'>
            <h1>Level Selection</h1>
            
                <div className = "navigate">
                    <button className="button buttons" onClick={() => {routeChangeL1()}}>Level 1</button>
                    <button className="button buttons" onClick={() => {routeChangeL2()}}>Level 2</button>
                    <button className="button buttons" onClick={() => {routeChangeL3()}}>Level 3</button>
                    <button className="button buttons" onClick={() => {routeChangeMenu()}}>Return to Menu</button> 
                </div>
            </div>
        </>
    )

};

export default LevelSelect;
