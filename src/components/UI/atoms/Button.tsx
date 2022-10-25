import React, { ForwardedRef, forwardRef } from "react";
import styled, { css, keyframes } from "styled-components";
import type { Size, Variant } from "types";

const spin1 = keyframes`
     0%    {clip-path: polygon(50% 50%,0       0,  50%   0%,  50%    0%, 50%    0%, 50%    0%, 50%    0% )}
   12.5% {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100%   0%, 100%   0%, 100%   0% )}
   25%   {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100% 100%, 100% 100%, 100% 100% )}
   50%   {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100% 100%, 50%  100%, 0%   100% )}
   62.5% {clip-path: polygon(50% 50%,100%    0, 100%   0%,  100%   0%, 100% 100%, 50%  100%, 0%   100% )}
   75%   {clip-path: polygon(50% 50%,100% 100%, 100% 100%,  100% 100%, 100% 100%, 50%  100%, 0%   100% )}
   100%  {clip-path: polygon(50% 50%,50%  100%,  50% 100%,   50% 100%,  50% 100%, 50%  100%, 0%   100% )}
`;

const spin2 = keyframes`
    0%    {transform:scaleY(1)  rotate(0deg)}
  49.99%{transform:scaleY(1)  rotate(135deg)}
  50%   {transform:scaleY(-1) rotate(0deg)}
  100%  {transform:scaleY(-1) rotate(-135deg)}
`;

const ButtonLoader = styled.div<{ size: Size }>`
  width: ${(p) => p.size === "lg" && "1.4rem"};
  width: ${(p) => p.size === "md" && "1.2rem"};
  width: ${(p) => p.size === "sm" && "1rem"};
  aspect-ratio: 1;
  border-radius: 50%;
  border: 2px solid #eceff4;
  animation: ${spin1} 0.8s infinite linear alternate, ${spin2} 1.6s infinite linear;
`;

const sm = css`
  height: 2.4rem;
  max-width: 7rem;
`;

const md = css`
  height: 2.7rem;
  max-width: 10rem;
`;

const lg = css`
  height: 3.2rem;
  max-width: 11rem;
  font-size: 1.1rem;
`;

const primary = css`
  background-color: #4146d7;
  color: #ffffff;
  &:hover {
    background-color: #686ddf;
  }
`;

const secondary = css`
  background-color: #fff;
  color: #4146d7;
`;

const disabled = css`
  box-shadow: 0 1px 0 rgb(0 0 0 / 45%);
  opacity: 0.5;
  cursor: default;
  span {
    display: none;
  }
  &:hover {
    border-color: transparent;
  }
`;

const baseBtn = css<StyledButtonProps>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.4rem;
  width: 100%;
  font-size: 0.95rem;
  font-weight: 600;
  transition: all 250ms ease;
  &:disabled {
    ${disabled}
  }
  ${(p) => p.size === "sm" && sm}
  ${(p) => p.size === "md" && md}
  ${(p) => p.size === "lg" && lg}
  ${(p) => p.variant === "primary" && primary}
  ${(p) => p.variant === "secondary" && secondary}
`;

const Container = styled.button<StyledButtonProps>`
  ${baseBtn}
`;

const StyledLink = styled.a<StyledButtonProps>`
  ${baseBtn}
`;

type StyledButtonProps = {
  variant: Variant;
  size: Size;
  loading?: boolean;
};

interface Props extends React.ComponentPropsWithoutRef<"button">, StyledButtonProps {}

interface PropsLink extends React.ComponentPropsWithoutRef<"a">, StyledButtonProps {
  asLink: boolean;
}

const Button = forwardRef<unknown, Props | PropsLink>(
  ({ children, loading, size, ...props }, ref) => {
    if ("asLink" in props) {
      const { asLink, ...rest } = props;
      return (
        <StyledLink
          size={size}
          role="button"
          ref={ref as ForwardedRef<HTMLAnchorElement>}
          {...rest}
        >
          {loading ? <ButtonLoader size={size} /> : children}
        </StyledLink>
      );
    }

    return (
      <Container size={size} ref={ref as ForwardedRef<HTMLButtonElement>} {...props}>
        {loading ? <ButtonLoader size={size} /> : children}
      </Container>
    );
  },
);

Button.displayName = "Button";

export default Button;
