import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Nav extends React.Component {
    render() {
        return(
            <>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <span className="navbar-brand mb-0 h1">Algo Game</span>
                </div>
            </nav>
            </>
        );
    }
}