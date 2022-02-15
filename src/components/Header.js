import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { Stack } from '@mui/material';
import { useNavigate } from "react-router-dom";

const Header = ({ title }) => {
  const onClick = () => {
    console.log('Click')
  }

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/L1`; 
    navigate(path);
  }

  return (
  <header className='header'>
    <Stack
  direction="column"
  justifyContent="center"
  alignItems="center"
  spacing={2}
>
    <h1>{title}</h1>

    <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
    }}
  >
    <Button color='cyan' text='Play' onClick={routeChange} />
    </div>
    <div
    text style={{color: 'black'}}
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
    }}
  >
    <Button color='cyan' text='Options' onClick={onClick} />
    </div>
    <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
    }}
  >
    <Button color='cyan' text='Quit' onClick={onClick} />
    </div>
    </Stack>
    </header>
  )
};

Header.defaultProps = {
  title: 'Sort It!'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header;