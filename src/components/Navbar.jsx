import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const navigate = useNavigate();

  const logoutUser = (event) =>{
      event.preventDefault();

      signOut(auth)
      .then(() => {
          navigate('/login')
      })
      .catch((error) => {

      });
  }

  return (
    <div className="navbar bg-white shadow-md px-6">
      <div className="flex-1">
        <Link to="/" className="text-xl font-semibold text-primary">Todo App</Link>
      </div>
      <div className="flex-none gap-4">
        <Link to="/" className="btn btn-ghost text-gray-700 hover:text-primary">Home</Link>
        <Link to="/login" className="btn btn-outline text-primary border-primary hover:bg-primary hover:text-white">Login</Link>
        <Link to="/register" className="btn btn-outline text-primary border-primary hover:bg-primary hover:text-white">Register</Link>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                alt="User avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-md shadow-lg mt-3 w-52 p-2"
          >
            {/* <li>
              <a className="text-gray-700 hover:text-primary flex justify-between">
                Profile
                <span className="badge badge-primary">New</span>
              </a>
            </li>
            <li><a className="text-gray-700 hover:text-primary">Settings</a></li> */}
            <li><a className="text-gray-700 hover:text-primary" onClick={logoutUser}>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
