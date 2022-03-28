import React from 'react';
import { useNavigate } from "react-router-dom";
import "./body.css";

const AlgorithmSelect = ({ title }) => {
    
    let navigate1 = useNavigate();

    const routeChangeMS = () => {
        let path = `/MergeSort`;
        navigate1(path);
    }
    const routeChangeQS = () => {
        let path = '/QuickSort';
        navigate1(path);
    }
    const routeChangeBS = () => {
        let path = '/BubbleSort';
        navigate1(path);
    }
    const routeChangeMenu = () =>{
        navigate1('/');
    }

    return (
        <>
            <div className = 'body'>
            <h1>Algorithm Selection</h1>
            
                <div className = "navigate">
                    <button className="button buttons" onClick={() => {routeChangeMS()}}>Merge Sort</button>
                    <button className="button buttons" onClick={() => {routeChangeQS()}}>Quick Sort</button>
                    <button className="button buttons" onClick={() => {routeChangeBS()}}>Bubble Sort</button>
                    <button className="button buttons" onClick={() => {routeChangeMenu()}}>Return to Menu</button> 
                </div>
            </div>
        </>
    )
};

export default AlgorithmSelect;