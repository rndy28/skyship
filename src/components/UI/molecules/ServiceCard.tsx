import styled from "styled-components";
import React from "react";

const Container = styled.div`
  padding: 1rem;
  &.active {
    border-left: 3px solid #4146d7;
    background-color: #f5f6fd;
  }
`;

const Title = styled.h2`
  margin-block: 0.8rem;
`;

const Description = styled.p``;

interface Props extends React.ComponentPropsWithoutRef<"div"> {
  title: string;
  description: string;
}

const ServiceCard = ({ title, description, ...props }: Props) => {
  return (
    <Container {...props}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default ServiceCard;
