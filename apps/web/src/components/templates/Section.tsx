/* eslint-disable react/display-name */
import React from "react";
import clsx from "clsx";

const Section = ({ children, className, ...props }: React.ComponentPropsWithoutRef<"section">) => {
  return (
    <div className={`max-w-7xl w-[90%] mx-auto md:w-[93%] ${className}`} {...props}>
      {children}
    </div>
  );
};

Section.Title = ({ children, className, ...props }: React.ComponentPropsWithoutRef<"h5">) => {
  return (
    <h5
      className={clsx(
        "text-sm text-primary font-bold tracking-[2px] uppercase text-center md:text-start",
        className
      )}
      data-aos="fade-right"
      {...props}
    >
      {children}
    </h5>
  );
};

Section.SubTitle = ({ children, className, ...props }: React.ComponentPropsWithoutRef<"h1">) => {
  return (
    <h1
      className={clsx(
        "text-2xl font-extrabold mx-auto mt-2 mb-8 text-center max-w-[15rem] md:mx-0 md:text-start md:max-w-[27rem] lg:text-3xl",
        className
      )}
      data-aos="fade-right"
      {...props}
    >
      {children}
    </h1>
  );
};

export default Section;
