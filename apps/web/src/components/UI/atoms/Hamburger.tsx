import clsx from "clsx";
import React from "react";

const line = "w-inherit h-[2px] absolute bg-[#434C5E] transition-all duration-200 ease-in";

const Hamburger = ({
  className,
  "aria-pressed": pressed,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      role="button"
      tabIndex={0}
      className={clsx("relative z-10 w-5 h-[0.9rem] cursor-pointer", className)}
      {...props}
    >
      <span
        className={clsx(line, pressed ? "top-[6px] rotate-[135deg]" : "top-[1px] right-0")}
      />
      <span
        className={clsx(line, pressed ? "top-[6px] -rotate-[135deg] w-inherit" : "top-[0.6rem]")}
      />
    </div>
  );
};

export default Hamburger;
