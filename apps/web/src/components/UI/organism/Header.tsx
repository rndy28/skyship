import React from "react";

interface Props {
  children: React.ReactNode;
}

const Header = ({ children }: Props) => {
  return (
    <header className="min-h-screen max-w-7xl w-[90%] mx-auto overflow-hidden 2md:w-[93%]">
      {children}
    </header>
  );
};

export default Header;
