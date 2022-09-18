import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';




class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedNavbar: null
        };
    }


    render() {

        return (
            <div className="jumbotron jumbotron-billboard">
            <div className="col align-center">
          
            <Button color="secondary">Book Your PhotoShoot</Button>{'Calender'}

            </div>
            </div>

        );
    }
}

export default Book;