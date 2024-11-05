import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

   useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid)
      } else {
         console.log('PlEASE LOGIN FIRST')
         navigate('/login')
      }
    });
   }, []);
   

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Header */}
      <header className="mb-5 mt-14">
        <h1 className="text-3xl font-bold text-primary">Make Your Todos</h1>
      </header>

      {/* Input Section */}
      <div className="w-full max-w-md flex items-center mb-6">
        <input
          type="text"
          placeholder="Add a new task..."
          className="input input-bordered input-primary w-full mr-2"
        />
        <button className="btn btn-primary">Add</button>
      </div>
    </div>
  );
}

export default Home