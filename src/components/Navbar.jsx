import React, {useState} from "react";
import {AiOutlineMenu, AiOutlineHome} from "react-icons/ai";


const Navbar = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };


  return (
    <div>
      <AiOutlineMenu className='absolute top-4 z-[99] md:hidden' onClick={handleNav} />
      {
        nav ? (
<div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20' >
  <a href="#main">
    <AiOutlineHome size={20} />
    <span className='pl-4'>Home</span>
  </a>
</div>
        ) : (
<div></div>
        )
      }
    </div>
  );
};

export default Navbar;
