import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import SortByRatingFilms from '../SortByRatingFilms';
import './index.scss';

const Layout = () => {
    return (
        <div className="layout">
            <Header/>
            <SortByRatingFilms/>
            <Footer/>
        </div>
    )
} 

export default Layout;