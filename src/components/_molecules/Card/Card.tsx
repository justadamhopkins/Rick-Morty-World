import { FC } from "react";
import Image from "next/image";
import {
  StyledCardWrapper,
  StyledCardImageWrapper,
  StyledCardLinkWrapper,
  StyledLink,
} from "./styles";
import Link from "next/link";

interface Props {
  name: string;
  gender: string;
  species: string;
  characterId: number;
  image: string;
}

export const Card: FC<Props> = ({
  name,
  gender,
  species,
  image,
  characterId,
}) => {
  return (
    <StyledCardWrapper>
      <StyledCardImageWrapper>
        <Image
          src={image}
          alt={"altText"}
          height={300}
          width={300}
          layout="responsive"
        />
      </StyledCardImageWrapper>
      <ul>
        <li>Name: {name}</li>
        <li>Gender: {gender}</li>
        <li>Species: {species}</li>
      </ul>
      <StyledCardLinkWrapper>
        <Link href={`/character/${characterId}`} passHref>
          <StyledLink>View Profile</StyledLink>
        </Link>
      </StyledCardLinkWrapper>
    </StyledCardWrapper>
  );
};
