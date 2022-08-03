import styled from "styled-components";
import React from "react";
import Image from "next/image";

const Container = styled.div`
  padding: 1rem;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 10px 100px 0px;
  border-radius: 0.4rem;
  width: 20rem;
`;

const Title = styled.h2`
  margin-block: 1rem 0.5rem;
`;

interface Props extends React.ComponentPropsWithoutRef<"div"> {
  title: string;
  picture: string;
}

const ProjectCard = ({ title, picture, ...props }: Props) => {
  return (
    <Container {...props}>
      <Image src={picture} alt={title} width={400} height={300} objectFit="fill" />
      <Title>{title}</Title>
    </Container>
  );
};

export default ProjectCard;
