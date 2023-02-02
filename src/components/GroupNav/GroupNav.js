import React from 'react';
import { Link } from 'react-router-dom';
import './GroupNav.css';
import downArrow from '../../assets/icons/down-arrow.png';
import peoples from '../../assets/icons/peoples.png';

const GroupNav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg mt-3">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link me-1 active" aria-current="page" to="/allposts">All Posts</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-1" to="/article">Article</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-1" to="/event">Event</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-1" to="/education">Education</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-1" to="/job">Job</Link>
              </li>
            </ul>

            <div className="d-flex gap-3">
              <div className='bg-light pe-3 rounded-2'>
                <span> <button type="button" className="btn text-dark fw-semibold pe-1">Write a Post</button></span>
                <span> <img src={downArrow} alt="" className='' /></span>
              </div>

              <div className='bg-primary ps-2 rounded-2'>
                <span><img src={peoples} alt="" /></span>
                <span> <button type="button" class="btn fw-semibold text-white ps-1">Join Group</button></span>
              </div>
            </div>

          </div>
        </div>
      </nav>

      <hr className='w-75 mx-auto mt-0' />

    </div>
  );
};

export default GroupNav;