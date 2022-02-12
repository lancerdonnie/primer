import React from 'react';
import Image from 'next/image';

const Nav = () => {
  return (
    <nav className="py-9">
      <a href="">
        <Image src="/assets/logo.svg" width={118} height={28} />
      </a>
    </nav>
  );
};

export default Nav;
