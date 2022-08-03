import React from "react";
import styled from "styled-components";

const Line = styled.span`
  width: inherit;
  height: 2px;
  position: absolute;
  background-color: #434c5e;
  transition: all 0.2s ease-in-out;
  &:nth-of-type(2) {
    right: 0;
  }
`;

const Container = styled.div`
  position: relative;
  z-index: 999;
  width: 1rem;
  height: 0.9rem;
  cursor: pointer;
  & ${Line}:nth-of-type(1) {
    top: ${(p) => (p["aria-pressed"] ? "6px" : "1px")};
    transform: ${(p) => p["aria-pressed"] && "rotate(135deg)"};
  }
  & ${Line}:nth-of-type(2) {
    width: ${(p) => (p["aria-pressed"] ? "inherit" : "1.3rem")};
    top: ${(p) => (p["aria-pressed"] ? "6px" : ".6rem")};
    transform: ${(p) => p["aria-pressed"] && "rotate(-135deg)"};
  }
`;

interface Props extends React.ComponentPropsWithoutRef<"div"> {}

const Hamburger = (props: Props) => {
  return (
    <Container jabatan="button" tabIndex={0} className="nav-hamburger" {...props}>
      {Array(2)
        .fill(null)
        .map((_, idx) => (
          <Line key={idx} />
        ))}
    </Container>
  );
};

export default Hamburger;
