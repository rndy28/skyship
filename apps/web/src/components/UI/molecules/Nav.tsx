import clsx from "clsx";
import Hamburger from "components/UI/atoms/Hamburger";
import React from "react";

const Nav = ({ children, className, ...props }: React.ComponentPropsWithoutRef<"nav">) => {
  return (
    <nav
      className={clsx("flex justify-between items-center min-h-[5rem] 2md:relative", className)}
      {...props}
    >
      {children}
    </nav>
  );
};

Nav.Items = ({
  children,
  className,
  isOpen,
  ...props
}: React.ComponentPropsWithoutRef<"ul"> & { isOpen: boolean }) => {
  return (
    <ul
      className={clsx(
        "bg-white absolute left-1/2 -translate-x-2/4 px-6 py-8 max-w-sm rounded-md w-[90%] z-[999] transition-[transform] ease duration-300 flex flex-col gap-4 text-center shadow-2xl",
        isOpen ? "translate-y-[10rem]" : " translate-y-[-120%]",
        "2md:static 2md:translate-x-0 2md:translate-y-0 2md:shadow-none 2md:flex-row 2md:gap-5 2md:p-0 2md:w-fit 2md:rounded-none",
        className
      )}
      {...props}
    >
      {children}
    </ul>
  );
};

Nav.Item = ({ children, className, ...props }: React.ComponentPropsWithoutRef<"li">) => {
  return (
    <li
      className={clsx(
        "text-[#4c566a] font-normal capitalize transition-[color] ease-linear hover:text-[#8994a9]",
        className
      )}
      {...props}
    >
      {children}
    </li>
  );
};

Nav.Hamburger = Hamburger;

export default Nav;
