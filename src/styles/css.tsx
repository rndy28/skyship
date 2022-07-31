import { css } from "styled-components";

export const introLayout = css`
  margin-top: 10rem;
  @media (min-width: 900px) {
    gap: 3rem;
    height: calc(100vh - 7rem);
    margin-top: 0;
  }
  @media (min-width: 1300px) {
    gap: 5rem;
  }
  @media (min-width: 1330px) {
    gap: 6rem;
  }
  @media (min-width: 1400px) {
    gap: 8rem;
  }
`;

export const introContainer = css`
  max-width: 30rem;
  margin-right: auto;
  & h1 {
    font-size: 2.3rem;
    margin-block: 0;
  }
  & p {
    margin-block: 1rem 1.2rem;
  }

  @media (min-width: 900px) {
    max-width: 30rem;
    margin-right: 0;
    & h1 {
      font-size: 3rem;
    }
  }
  @media (min-width: 1200px) {
    max-width: 40rem;
    & h1 {
      font-size: 4rem;
      line-height: 1.1;
    }
    & p {
      max-width: 30rem;
    }
  }
`;

export const boxIllustrationContainer = css`
  display: none;
  @media (min-width: 900px) {
    display: inline-block;
    position: relative;
    min-height: 17rem;
    width: 17rem;
  }
  @media (min-width: 1000px) {
    min-height: 19rem;
    width: 19rem;
  }
  @media (min-width: 1100px) {
    min-height: 22rem;
    width: 22rem;
  }
  @media (min-width: 1200px) {
    min-height: 24rem;
    width: 24rem;
  }
  @media (min-width: 1300px) {
    min-height: 28rem;
    width: 28rem;
  }
`;

export const boxIllustrationPlaceholder = css`
  @media (min-width: 900px) {
    min-height: inherit;
    width: inherit;
    position: absolute;
    top: 2rem;
    right: 2rem;
    z-index: -1;
    background-color: #4146d7;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  }
`;

export const cardGrid = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
  gap: 2rem;
  place-items: center;
  @media (max-width: 700px) {
    grid-template-columns: unset !important;
  }
`;

export const teamsLayout = css`
  justify-content: center;
  @media (min-width: 650px) {
    justify-content: space-between;
  }
`;

export const serviceLayout = css`
  flex-direction: column-reverse;
  gap: 3rem;
  @media (min-width: 900px) {
    flex-direction: row;
    gap: 0;
  }
`;

export const notFoundLayout = css`
  display: grid;
  place-items: center;
  min-height: 100vh;
  text-align: center;
  & > div {
    max-width: 25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    & p {
      margin-block: 0.4rem 0.2rem;
    }
  }
`;

export const error = css`
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: #fef2f2;
  color: #991b1b;
  border-radius: 0.4rem;
  padding-inline: 1rem;
  font-size: 0.95rem;
`;
