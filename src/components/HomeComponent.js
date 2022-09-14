import React, { Component } from 'react';
import { FadeTransform } from 'react-animation-components';
import { Media } from 'reactstrap';


import camera from '../assets/images/camera.jpg'
import family from '../assets/images/family.jpg'
import handsphoto from '../assets/images/handsphoto.jpg'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedNavbar: null
        };
    }


    render() {

        return (
            <FadeTransform
            in
            transformProps={{
                exitTransform: 'scale(0.5) translateY(50%)'
            }}>
            <div className="container">
                <div className="row p-3">
                </div>
                <div className="row justify-content-md-center">
                    <div className="col justify-self-center">
                    <Media object src={camera} alt='camera' />
                    </div>
                </div>
                <div className="row p-5">
                </div>
            </div>
            </FadeTransform>
        );
    }
}

export default Home;