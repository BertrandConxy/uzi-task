import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import Logo from '../../assets/uzi-logo.svg';

const TopBar = () => (
  <section className="d-flex justify-content-between  text-white">
    <Link to="/overview">
      <div>
        <img src={Logo} alt="logo" className="" />
      </div>
    </Link>
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <Link to="/overview">
          <div className="border border-white rounded-circle p-1 color-6">
            <FaUserAlt className="fs-4 text-dark" />
          </div>
        </Link>
        <Link to="/overview" className="text-dark">
          <FiLogOut className="fs-4 mx-4 fw-bold" />
        </Link>
      </div>
      <p className="fw-bold text-dark">Hello User</p>
    </div>
  </section>
);

export default TopBar;
