import React from 'react';

//include images into your bundle
import rigoImage from '../../img/rigo-baby.jpg';

//create your first component
export class SecondsCounter extends React.Component{
    
    render(props){
        return (
            <div className="container">
                <div className="row" style="background:black;">
                    <div className="col-1" ><i className="far fa-clock"></i></div>
                    <div className="col-1">0</div>
                    <div className="col-1">0</div>
                    <div className="col-1">0</div>
                    <div className="col-1">0</div>
                    <div className="col-1">0</div>
                    <div className="col-1">0</div>
                </div>
            </div>
        );
    }
}
