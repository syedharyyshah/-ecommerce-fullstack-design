import React from 'react';
import ProductsGrid from '../shopProductsGrid/ProductsGrid';
import ProductsGrid2 from '../shopProductsGrid/ProductsGrid2';
import ProductsGrid3 from '../shopProductsGrid/ProductsGrid3';
import Inquiry from './inquiry/Inquiry';
import ProductsGrid4 from '../shopProductsGrid/ProductsGrid4';
import ProductsGrid5 from '../shopProductsGrid/ProductsGrid5';
import Subscribe from './Subscribe';
import Footer from './Footer';
import LeftSide from '../slider/LeftSide';
import RightSide from '../slider/RightSide';
import MiddleSide from '../slider/MiddleSide';

const Home = () => {
  return (
    <>
    <div className='bg-green-50 md:px-21 md:py-3'>
      <div className='flex justify-between p-6 flex-col md:flex-row bg-white shadow-md rounded-lg w-full'>
        <LeftSide />
        <MiddleSide />
        <RightSide />
      </div>
      <ProductsGrid/>
      <ProductsGrid2/>
      <ProductsGrid3/>
      <Inquiry/>
      <ProductsGrid4/>
      <ProductsGrid5/>
    </div>
    <Subscribe/>
      <Footer/>
    </>
  );
};

export default Home;