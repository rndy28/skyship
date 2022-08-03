import styled from "styled-components";
import React from "react";
import Flex from "components/UI/atoms/Flex";
import Image from "next/image";

const Container = styled.div`
  max-width: 18rem;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  border-radius: 0.4rem;
  overflow: hidden;
`;

const Name = styled.h5`
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const Role = styled.h3`
  font-size: 1.1rem;
`;

const Wrapper = styled(Flex)`
  padding: 0.5rem 1rem 1.2rem 1rem;
`;

interface Props extends React.ComponentPropsWithoutRef<"div"> {
  name: string;
  position: string | string[];
  picture: string;
}

const IntroCard = ({ name, position, picture, ...props }: Props) => {
  return (
    <Container {...props}>
      <Image
        src={picture}
        alt={`${name} - ${typeof position === "object" ? position[0] : position}`}
        width={350}
        height={500}
      />
      <Wrapper direction="column-reverse" gap="0.5rem">
        <Role>
          {typeof position === "object"
            ? position.map((r, idx) =>
                position[idx] !== position[position.length - 1] ? `${r} - ` : r,
              )
            : position}
        </Role>
        <Name>{name}</Name>
      </Wrapper>
    </Container>
  );
};

export default IntroCard;
