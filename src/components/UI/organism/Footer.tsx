import styled from "styled-components";
import React from "react";

const Container = styled.footer`
  width: 100%;
  padding: 2rem 3rem;
  background-color: #1c1a49;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  & h1 {
    color: inherit;
  }
`;

const Items = styled.ul`
  display: flex;
  gap: 0.8rem;
`;

const Item = styled.li`
  color: inherit;
  font-weight: 400;
  transition: color 0.3s ease-in;
  cursor: pointer;
  &:hover {
    color: #8994a9;
  }
`;

const IconContainer = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  display: grid;
  place-items: center;
  cursor: pointer;
  background-color: #ecedfb;
  color: #4146d7;
  transition: all 250ms ease-in;
  border-radius: 0.4rem;
  &:hover {
    background-color: #4146d7;
    color: #ecedfb;
  }
`;

interface Props extends React.ComponentPropsWithoutRef<"footer"> {}

const Footer = ({ children, ...props }: Props) => {
  return <Container {...props}>{children}</Container>;
};

Footer.Items = Items;
Footer.Item = Item;
Footer.IconContainer = IconContainer;

export default Footer;
