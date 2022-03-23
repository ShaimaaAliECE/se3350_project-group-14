import React from "react"
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "../Nav";

export default class Stats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {sessions: [], analytics: []};
    }

    componentDidMount() {
        axios.get("http://localhost:5000/display-sessions").then(response => {
            this.setState({
                sessions: response.data.reverse()
            })
        })
        axios.get("http://localhost:5000/display-analytics").then(response => {
            this.setState({
                analytics: response.data.reverse()
            })
        })
    }

    render () {
        let session_data = this.state.sessions.map(session => {
            return (
                <tr key={session.id}>
                    <td>{session.id}</td>
                    <td>{session.key}</td>
                </tr>
            );
        });
        
        let analytic_data = this.state.analytics.map(analytic => {
            return (
                <tr key={analytic.id}>
                    <td>{analytic.id}</td>
                    <td>{analytic.session_id}</td>
                    <td>{analytic.algorithm_id}</td>
                    <td>{analytic.level}</td>
                    <td>{analytic.status}</td>
                    <td>{analytic.time_spent}</td>
                    <td>{analytic.created_at}</td>
                </tr>
            );
        });


        return (
            <>
            <Nav />
            <h1 className="mt-5">Admin Analytics</h1>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card text-white bg-primary mb-3">
                            <div className="card-header">Total Session</div>
                            <div className="card-body">
                                <h5 className="card-title">{this.state.sessions.length}</h5>
                            </div>
                        </div>
                        <h4>Session Created</h4>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Session Key</th>
                                </tr>
                            </thead>
                            <tbody>
                                {session_data}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-6">
                        <div className="card text-white bg-info mb-3">
                            <div className="card-header">Total Level Played</div>
                            <div className="card-body">
                                <h5 className="card-title">{this.state.analytics.length}</h5>
                            </div>
                        </div>
                        <h4>Levels Played</h4>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Session ID</th>
                                    <th scope="col">Algorithm</th>
                                    <th scope="col">Level</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Time Spent</th>
                                    <th scope="col">Created At</th>
                                </tr>
                            </thead>
                            <tbody>
                                {analytic_data}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </>
        );
    }
}