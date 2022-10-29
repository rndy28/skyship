import Image from "next/image";
import React from "react";
import clsx from "clsx";

interface Props extends React.ComponentPropsWithoutRef<"div"> {
  title: string;
  picture: string;
}

const ProjectCard = ({ title, picture, className, ...props }: Props) => {
  return (
    <div className={clsx("p-4 shadow-4xl rounded-md w-80", className)} {...props}>
      <Image src={picture} alt={title} width={400} height={300} objectFit="fill" />
      <h2 className="mt-4 mb-2">{title}</h2>
    </div>
  );
};

export default ProjectCard;
