import React from 'react';

function Header() {
  return (
    <header className='bg-sky-600 w-full h-20'>
      <nav className='w-3/4 h-20 flex'>
        <span>Menu</span>
        <span>UserName</span>
        <span>Sales Report</span>
      </nav>
    </header>
  );
}

export default Header;