import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../components/Banner/Banner';
import Navbar from '../components/Navbar/Navbar';
import CategoryNav from '../components/CategoryNav/CategoryNav';


const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <CategoryNav></CategoryNav>

      <div className='grid grid-cols-3 gap-10'>
        <div className='col-span-2'>
          <Outlet></Outlet>
        </div>

        <div className='col-span-1'>

        </div>
      </div>

    </div>
  );
};

export default Main;