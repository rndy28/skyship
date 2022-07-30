import styled from "styled-components";
import React from "react";

const Container = styled.div`
  background-color: #4146d7;
  color: #ffffff;
  min-height: 15rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  @media (min-width: 768px) {
    padding-block: 0;
  }
`;

const Title = styled.h1`
  font-family: "Manjari";
  color: inherit;
  font-size: 1.7rem;
  margin-block: 0 0.5rem;
  @media (min-width: 900px) {
    font-size: 2.5rem;
  }
  @media (min-width: 1200px) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  color: inherit;
  max-width: 40rem;
`;

interface Props extends React.ComponentPropsWithoutRef<"div"> {}

const Banner = ({ children, ...props }: Props) => {
  return <Container {...props}>{children}</Container>;
};

Banner.Title = Title;
Banner.Description = Description;

export default Banner;
