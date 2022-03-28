
import React, { useEffect } from 'react';

import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./Body/body.css";

const LevelSelect = ({ title }) => {

    
    useEffect(() => {
        const currentSession = sessionStorage.getItem("session");

        if(!currentSession) {
            axios.get("http://localhost:5000/create-session").then(function(response) {
                const session = response.data

                sessionStorage.setItem("session", JSON.stringify(session));
            }).catch(err => console.log(err))
        }
    }, []);
    
    let navigate1 = useNavigate();

    const routeChangeL1 = () => {
        let path = `/tutorial.html`;
        //navigate1(path);
        window.location.href = '/tutorial.html';
    }
    const routeChangeL2 = () => {
        let path = '/L2';
        navigate1(path);
    }
    const routeChangeL3 = () => {
        let path = '/L3';
        navigate1(path);
    }
    const routeChangeL4 = () => {
        let path = '/L4';
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
                    <button className="button buttons" onClick={() => {routeChangeL4()}}>Level 4</button>
                    <button className="button buttons" onClick={() => {routeChangeMenu()}}>Return to Menu</button> 
                </div>
            </div>
        </>
    )
};

export default LevelSelect;
