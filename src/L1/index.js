import React, { Component } from 'react';
import Level from './Level';
import ControlBar from './ControlBar'
import './style.css';

export default class index extends Component {
    render() {
        return(
            <>
            <ControlBar />
            <Level size='10' />
            </>
        );
    }
}