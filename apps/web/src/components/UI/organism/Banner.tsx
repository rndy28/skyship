import React from "react";
import clsx from "clsx";

const Banner = ({ children, className, ...props }: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={clsx(
        "bg-primary text-white min-h-[15rem] w-full flex flex-col gap-2 items-center justify-center text-center p-8 md:py-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

Banner.Title = ({ children, className, ...props }: React.ComponentPropsWithoutRef<"h1">) => {
  return (
    <h1
      className={clsx(
        "font-manjari font-bold text-inherit text-3xl 2md:text-[2.5rem] xl:text-5xl",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

Banner.Description = ({ children, className, ...props }: React.ComponentPropsWithoutRef<"p">) => {
  return (
    <p className={clsx("text-inherit max-w-[40rem]", className)} {...props}>
      {children}
    </p>
  );
};

export default Banner;
