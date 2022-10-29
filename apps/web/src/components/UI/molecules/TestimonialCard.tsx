/* eslint-disable @next/next/no-img-element */
import React from "react";
import clsx from "clsx";

interface Props extends React.ComponentPropsWithoutRef<"div"> {
  name: string;
  position: string | string[];
  picture: string;
  testimonial: string;
}

const TestimonialCard = ({ name, picture, position, testimonial, className, ...props }: Props) => {
  return (
    <article
      className={clsx("border border-solid border-primary-200 p-4 rounded-md", className)}
      {...props}
    >
      <div className="flex items-center gap-4">
        <img className="rounded-[50%] w-12 h-12" src={picture} alt={`${name} - ${position}`} />
        <div className="flex flex-col gap-1">
          <h3>{name}</h3>
          <p className="text-[.95rem]">{position}</p>
        </div>
      </div>
      <p className="mt-4">{testimonial}</p>
    </article>
  );
};

export default TestimonialCard;
