import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banners from '../Banner/Banners';
import Bonus from '../Bonus/Bonus';
import BuyerProducts from '../BuyerProducts/BuyerProducts';
import Choose from '../Choose/Choose';
import Farmer from '../Farmer/Farmer';
import Offer from '../Offer/Offer';
import Patner from '../Patner/Patner';
import Categories from './Categories/Categories';
// import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div style={{background:"black"}}>
            <Header></Header>
            <Banners></Banners>
            <Bonus></Bonus>
            <BuyerProducts></BuyerProducts>
            <Categories></Categories>
            <div className='mt-5'>
            <Choose></Choose>
            </div>
            <Farmer></Farmer>
            <Offer></Offer>
            <Patner></Patner>
            
            <Footer></Footer>
            
        </div>
    );
};

export default Home;