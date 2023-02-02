import React from 'react';
import logo from '../../assets/images/logo/logo.png';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg my-2">
      <div className="container d-flex justify-content-between align-items-center p-0">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Bootstrap" width="" height="" />
        </a>

        <div className='px-5 py-2 bg-light rounded-5 d-flex align-items-center'>
          <span>
            <i className="fa-solid fa-magnifying-glass me-3 text-secondary"></i>
          </span>
          <input
            className="border-0 input-w bg-light" type="text" placeholder="Search for your favorite groups in ATG">
          </input>
        </div>

        <div className='right-side'>
          <span>Create account. </span>
          <span className='text-primary fw-bolder'> It’s free!</span>
          <span><i className="fa-solid fa-angle-down ms-2"></i></span>
        </div>
      </div>
    </nav >
  );
};

export default Navbar;