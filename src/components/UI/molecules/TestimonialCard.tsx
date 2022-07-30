import styled from "styled-components";
import React from "react";
import Flex from "components/UI/atoms/Flex";

const Container = styled.article`
  border: 1px solid #d9daf7;
  padding: 1rem;
  border-radius: 0.4rem;
`;

const Profile = styled.img`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
`;

const Name = styled.h3``;

const Role = styled.p`
  font-size: 0.95rem;
`;

const Description = styled.p`
  margin-top: 1rem;
`;

type Props = {
  name: string;
  role: string;
  picture: string;
  testimonial: string;
};

const TestimonialCard = ({ name, picture, role, testimonial }: Props) => {
  return (
    <Container>
      <Flex gap="1rem" alignItems="center">
        <Profile src={picture} alt={`${name} - ${role}`} />
        <Flex direction="column" gap="0.4rem">
          <Name>{name}</Name>
          <Role>{role}</Role>
        </Flex>
      </Flex>
      <Description>{testimonial}</Description>
    </Container>
  );
};

export default TestimonialCard;
