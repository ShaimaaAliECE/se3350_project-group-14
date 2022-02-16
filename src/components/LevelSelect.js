import Button from './Button';
import { Stack } from '@mui/material';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

const LevelSelect = ({ title }) => {
    const onClick = () => {
        console.log('Click')
    }

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

    return (
        <>
            <div className="LevelSelect">
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <h1><center> {title} </center></h1>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "white"
                        }}
                    >
                        <Button color='#4860e6' text='L1' onClick={routeChangeL1} />
                    </div>
                    <div
                        text style={{ color: 'black' }}

                    >
                        <Button color='#4860e6' text='L2' onClick={routeChangeL2} />
                    </div>
                    <div

                    >
                        <Button color='#4860e6' text='L3' onClick={routeChangeL3} />
                    </div>
                </Stack>
            </div>
        </>
    );

};
LevelSelect.defaultProps = {
    title: 'Level Select'
}

LevelSelect.propTypes = {
    title: PropTypes.string.isRequired,
}
export default LevelSelect;