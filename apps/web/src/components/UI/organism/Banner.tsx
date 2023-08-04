import React from "react";
import clsx from "clsx";

const Banner = ({ children, className, ...props }: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={clsx(
        "bg-primary text-white min-h-[15rem] w-full flex flex-col gap-2 items-center justify-center text-center px-4 md:p-8 py-8 md:py-0 lg:py-16",
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
    <p className={clsx("text-inherit text-sm leading-relaxed md:text-lg max-w-[20rem] md:max-w-[40rem] lg:max-w-[50rem]", className)} {...props}>
      {children}
    </p>
  );
};

export default Banner;
