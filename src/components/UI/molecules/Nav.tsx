import styled from "styled-components";
import React from "react";
import Hamburger from "components/UI/atoms/Hamburger";

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  min-height: 5rem;
  @media (min-width: 950px) {
    .nav-hamburger {
      display: none;
    }
  }
`;

const Items = styled.ul`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -200%);
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  background-color: #fff;
  box-shadow: rgba(17, 12, 46, 0.25) 0px 48px 100px 0px;
  padding: 1.5rem 2rem;
  border-radius: 0.45rem;
  width: 100%;
  transition: transform 0.4s ease;
  z-index: 999;
  max-width: 25rem;
  &.open {
    transform: translate(-50%, 8rem);
  }

  @media (min-width: 950px) {
    position: static;
    transform: translate(0);
    background-color: transparent;
    box-shadow: none;
    flex-direction: row;
    gap: 1.3rem;
    padding: 0;
    width: fit-content;
  }
`;

const Item = styled.li`
  color: #4c566a;
  font-weight: 400;
  text-transform: capitalize;
  transition: color 0.3s ease-in;
  &:hover {
    color: #8994a9;
  }
`;

interface Props extends React.ComponentPropsWithoutRef<"nav"> {}

const Nav = ({ children, ...props }: Props) => {
  return <Container {...props}>{children}</Container>;
};

Nav.Items = Items;

Nav.Item = Item;

Nav.Hamburger = Hamburger;

export default Nav;
