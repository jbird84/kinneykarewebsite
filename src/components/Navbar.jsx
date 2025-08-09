import React, {useState} from "react";
import {AiOutlineMenu} from "react-icons/ai";


const Navbar = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };


  return (
    <div>
      <AiOutlineMenu className='absolute top-4 z-[99] md:hidden' onClick={handleNav} />
    </div>
  );
};

export default Navbar;
