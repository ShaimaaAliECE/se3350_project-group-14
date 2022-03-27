import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Nav extends React.Component {
    render() {
        return(
            <>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <span className="navbar-brand mb-0 h1">Algo Game</span>
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#" onClick={() => { sessionStorage.clear(); window.location = '/admin'}}>Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>
            </>
        );
    }
}