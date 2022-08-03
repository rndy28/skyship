import styled from "styled-components";
import React from "react";

const Container = styled.header`
  min-height: 100vh;
  max-width: 80rem;
  width: 90%;
  margin-inline: auto;
  overflow: hidden;
  @media (min-width: 900px) {
    width: 93%;
  }
`;

type Props = {
  children: React.ReactNode;
};

const Header = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default Header;
