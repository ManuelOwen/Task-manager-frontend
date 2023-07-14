import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaHome, FaEdit, FaTasks, FaHourglassHalf, FaBell } from 'react-icons/fa';


export const Navbar = () => {
  return (
    <>
      <div className='Navbar'>
        <Link to="/">
         <div className='icon'> <FaHome /> </div>
          <span>Home</span>
        </Link>
        <Link to="/Createtask">
          <FaEdit />
          <span>Create Task</span>
        </Link>
        <Link to="/Tracktask">
          <FaTasks />
          <span>Track task</span>
        </Link>
        <Link to="/Filter">
          <FaHourglassHalf />
          <span>Filter & sort</span>
        </Link>
        <Link to="/Notification">
          <FaBell />
          <span>Notification</span>
        </Link>
      </div>
    </>
  );
};
