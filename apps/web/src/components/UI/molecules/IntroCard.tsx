import Image from "next/image";
import React from "react";
import clsx from "clsx";

interface Props extends React.ComponentPropsWithoutRef<"div"> {
  name: string;
  position: string | string[];
  picture: string;
}

const IntroCard = ({ name, position, picture, className, ...props }: Props) => {
  return (
    <div
      className={clsx("overflow-hidden rounded-md max-w-[18rem] shadow-3xl", className)}
      {...props}
    >
      <Image
        src={picture}
        alt={`${name} - ${typeof position === "object" ? position[0] : position}`}
        width={350}
        height={500}
      />
      <div className="flex flex-col px-4 pt-2 pb-5">
        <h3 className="text-lg">
          {typeof position === "object"
            ? position.map((r, idx) =>
                position[idx] !== position[position.length - 1] ? `${r} - ` : r
              )
            : position}
        </h3>
        <h5 className="text-sm mt-2">{name}</h5>
      </div>
    </div>
  );
};

export default IntroCard;
