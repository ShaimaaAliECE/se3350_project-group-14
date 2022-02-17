import "./levelSelect.css";
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
        <div className="LevelSelect">

                <h1 className = "Title">Level Select</h1>
                <div>
                    <button className = "Button Buttons" onClick={routeChangeL1}>Level 1</button>  
                    <button className = "Button Buttons" onClick={routeChangeL2}>Level 2</button>
                    <button className = "Button Buttons" onClick={routeChangeL3}>Level 3</button>     
                </div>
        </div>
    );

};
LevelSelect.defaultProps = {
    title: 'Level Select'
}

LevelSelect.propTypes = {
    title: PropTypes.string.isRequired,
}
export default LevelSelect;