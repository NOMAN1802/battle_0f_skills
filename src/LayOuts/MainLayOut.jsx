/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const MainLayOut = () => {
    const location = useLocation();
   
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp')
    return (
        <div>
            {noHeaderFooter || <Header></Header>}
            
            <div className="pt-20 pb-20">
             <Outlet></Outlet>
             
             
             {noHeaderFooter || <Footer></Footer>}
            </div>
        </div>
    );
};

export default MainLayOut;