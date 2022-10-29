import React from "react";
import clsx from "clsx";

interface Props extends React.ComponentPropsWithoutRef<"div"> {
  title: string;
  description: string;
  priority?: boolean;
}

const ServiceCard = ({ title, description, priority, className, ...props }: Props) => {
  return (
    <div
      className={clsx("p-4", priority && "border-l-4 border-primary bg-[#f5f6fd]", className)}
      {...props}
    >
      <h2 className="py-2 font-bold text-2xl">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
