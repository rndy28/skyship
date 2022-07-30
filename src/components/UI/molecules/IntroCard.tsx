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

type Props = {
  name: string;
  role: string | string[];
  picture: string;
};

const IntroCard = ({ name, role, picture }: Props) => {
  return (
    <Container>
      <Image
        src={picture}
        alt={`${name} - ${typeof role === "object" ? role[0] : role}`}
        width={350}
        height={500}
      />
      <Wrapper direction="column-reverse" gap="0.5rem">
        <Role>
          {typeof role === "object"
            ? role.map((r, idx) => (role[idx] !== role[role.length - 1] ? `${r} - ` : r))
            : role}
        </Role>
        <Name>{name}</Name>
      </Wrapper>
    </Container>
  );
};

export default IntroCard;
