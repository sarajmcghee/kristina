import { Routes, Route } from "react-router-dom";

import React, { Component } from 'react';
import Services from '../components/ServiceComponent';
import Book from '../components/BookComponent';
import Reviews from '../components/ReviewsComponent';
import Faqs from '../components/FaqsComponent';
import Giftcards from '../components/GiftcardComponent';
import Home from '../components/HomeComponent';

export default class routerURL extends Component {
    render() {
        return (

            <Routes>
                <Route path='/' element={<Home />} />
                <Route exact path='/book' element={<Book />} />
                <Route exact path='/services' element={<Services />} />
                <Route exact path='/reviews' element={<Reviews />} />
                <Route exact path='/faqs' element={<Faqs />} />
                <Route exact path='/giftcards' element={<Giftcards />} /> 
            </Routes>

        );
    }
}