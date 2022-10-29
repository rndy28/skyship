import clsx from "clsx";
import React from "react";
import Link from "next/link";
import type { UrlObject } from "url";

const Footer = ({ children, className, ...props }: React.ComponentPropsWithoutRef<"footer">) => {
  return (
    <footer
      className={clsx(
        "w-full py-8 px-12 bg-[#1c1a49] text-white flex justify-between items-center flex-wrap gap-8",
        className
      )}
      {...props}
    >
      {children}
    </footer>
  );
};

Footer.Items = ({ children, className, ...props }: React.ComponentPropsWithoutRef<"ul">) => {
  return (
    <ul className={clsx("flex gap-3", className)} {...props}>
      {children}
    </ul>
  );
};

Footer.Item = ({ children, className, ...props }: React.ComponentPropsWithoutRef<"li">) => {
  return (
    <li
      className={clsx(
        "text-inherit font-normal transition-all ease-in cursor-pointer hover:text-[#8994a9]",
        className
      )}
      {...props}
    >
      {children}
    </li>
  );
};

Footer.IconContainer = ({
  children,
  className,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"a"> & { href: string | UrlObject }) => {
  return (
    <Link href={href} passHref>
      <a
        className={clsx(
          "w-10 h-10 grid place-items-center cursor-pointer bg-[#ecedfb] text-primary transition-all ease-in rounded-md hover:bg-primary hover:text-[#ecedfb]",
          className
        )}
        {...props}
      >
        {children}
      </a>
    </Link>
  );
};

export default Footer;
