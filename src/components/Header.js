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
    let path = `/LevelSelect`; 
    navigate(path);
  }

  const routeChangeOp = () =>{ 
    let path = `/Options`; 
    navigate(path);
  }

  const routeChangeQuit = () =>{ 
    let path = `/`; 
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
 
  >
    <Button color='cyan' text='Options' onClick={routeChangeOp} />
    </div>
    <div
 
  >
    <Button color='cyan' text='Quit' onClick={routeChangeQuit} />
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
