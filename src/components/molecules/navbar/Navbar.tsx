import React, { ReactNode } from "react";
import Logo from "../../atoms/logo/Logo";

type Props = {
  menu: ReactNode;
};

const Navbar: React.FC<Props> = ({ menu }) => {
  return (
    <nav className="navbar w-full h-[8vh] fixed top-0 item z-[999999]  bg-[#fff]">
      <div className="max-w-[80%] lg:max-w-[70%] md:max-w-[90%] m-auto flex justify-between items-center h-full">
        <Logo />
        {menu}
      </div>
    </nav>
  );
};

export default Navbar;
