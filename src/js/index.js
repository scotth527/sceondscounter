//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

//include bootstrap npm library into the bundle
import  'bootstrap';

//include your index.scss file into the bundle
import '../styles/index.scss';

function SecondsCounter (props) {
    return ( <div className="container">
        <div className="row" >
            <div className="col-1" ><i className="far fa-clock"></i></div>
            <div className="col-1">{props.digitSix % 10}</div>
            <div className="col-1">{props.digitFive  % 10}</div>
            <div className="col-1">{props.digitFour  % 10}</div>
            <div className="col-1">{props.digitThree  % 10}</div>
            <div className="col-1">{props.digitTwo  % 10}</div>
            <div className="col-1">{props.digitOne  % 10}</div>
        </div>
    </div>);
    }
    
SecondsCounter.propTypes = {
    digitSix: PropTypes.number,
    digitFive: PropTypes.number,
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
};

let counter = 0;
setInterval(()=> {
    let one = Math.floor(counter/1);
    let two = Math.floor(counter/10);
    let three = Math.floor(counter/100);
    let four = Math.floor(counter/1000);
    let five = Math.floor(counter/10000);
    let six = Math.floor(counter/100000);

    counter++;
    ReactDOM.render(
        <SecondsCounter digitOne={one} digitTwo={two} digitThree={three} 
        digitFour={four} digitFive={five} digitSix={six}/>,
        document.querySelector('#app')
    );
}, 1000); 


//render your react application
