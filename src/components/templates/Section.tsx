/* eslint-disable react/display-name */
import styled from "styled-components";
import React from "react";

const Container = styled.section`
  max-width: 80rem;
  width: 90%;
  margin-inline: auto;
  & + & {
    margin-block: 10rem;
  }
  @media (min-width: 900px) {
    width: 93%;
  }
`;

const Title = styled.h5`
  font-size: 0.9rem;
  color: #4146d7;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 0;
  text-align: center;
  @media (min-width: 768px) {
    text-align: start;
  }
`;

const SubTitle = styled.h1`
  font-size: 1.3rem;
  margin: 0.5rem auto 2rem auto;
  line-height: 1.3;
  text-align: center;
  max-width: 15rem;
  @media (min-width: 768px) {
    margin-inline: 0;
    text-align: start;
    max-width: 27rem;
  }
  @media (min-width: 900px) {
    font-size: 1.7rem;
  }
  @media (min-width: 1200px) {
    font-size: 2rem;
  }
`;

interface Props extends React.ComponentPropsWithoutRef<"section"> {}
interface PropsTitle extends React.ComponentPropsWithoutRef<"h5"> {}
interface PropsSubTitle extends React.ComponentPropsWithoutRef<"h1"> {}

const Section = ({ children, ...props }: Props) => {
  return <Container {...props}>{children}</Container>;
};

Section.Title = ({ children, ...props }: PropsTitle) => {
  return (
    <Title data-aos="fade-right" {...props}>
      {children}
    </Title>
  );
};

Section.SubTitle = ({ children, ...props }: PropsSubTitle) => {
  return (
    <SubTitle data-aos="fade-right" {...props}>
      {children}
    </SubTitle>
  );
};

export default Section;
