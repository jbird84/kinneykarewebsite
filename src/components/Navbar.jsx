import React from "react";

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
    <div className='container py-2 flex justify-center md:justify-between items-center'>
      <div className='text-2xl font-bold hidden md:inline'>KinneyKare</div>
      <div className='space-x-6'>
        <a href="#about" className='hover:text-gray-400'>About Us</a>
        <a href="#computer-repair" className='hover:text-gray-400'>Computer Repair</a>
        <a href="#iphone-repair" className='hover:text-gray-400'>iPhone Repair</a>
        <a href="#contact" className='hover:text-gray-400'>Contact Us</a>
      </div>
      <button className="bg-gradient-to-r from-blue-500 to-yellow-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded">Connect Me </button>
    </div>
    </nav>
  );
};

export default Navbar;
