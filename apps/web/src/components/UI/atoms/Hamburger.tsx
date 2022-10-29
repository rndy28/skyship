import clsx from "clsx";
import React from "react";

const baseLine = "w-inherit h-[2px] absolute bg-[#434c5e] transition-all ease-in-out";

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
      <span className={clsx(baseLine, pressed ? "top-[6px] rotate-[135deg]" : "top-[1px]")} />
      <span
        className={clsx(
          baseLine,
          pressed ? "top-[6px] -rotate-[135deg] w-inherit" : "top-[0.6rem] w-8"
        )}
      />
    </div>
  );
};

export default Hamburger;
