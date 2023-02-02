import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../components/Banner/Banner';
import Events from '../components/Events/Events';
import Navbar from '../components/Navbar/Navbar';


const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>

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