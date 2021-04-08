import { FC } from "react";
import Image from "next/image";
import { Button } from "_atoms/Button/Button";
import {
  StyledCardWrapper,
  StyledCardImageWrapper,
  StyledCardButtonWrapper,
} from "./styles";

export const Card: FC = () => {
  return (
    <StyledCardWrapper>
      <StyledCardImageWrapper>
        <Image
          src={"https://rickandmortyapi.com/api/character/avatar/1.jpeg"}
          alt={"altText"}
          height={300}
          width={300}
          layout="responsive"
        />
      </StyledCardImageWrapper>
      <ul>
        <li>Name:</li>
        <li>Gender:</li>
        <li>Species:</li>
      </ul>
      <StyledCardButtonWrapper>
        <Button />
      </StyledCardButtonWrapper>
    </StyledCardWrapper>
  );
};
