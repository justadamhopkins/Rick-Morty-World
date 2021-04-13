import { FC } from "react";
import { Hero } from "_organisms/Hero/Hero";
import { Title } from "_atoms/Title/Title";
import ProfileImage from "_atoms/ProfileImage/ProfileImage";
import { StyledCharacterTemplateWrapper } from "./styles";
import Link from "next/link";
import { Arrow } from "_atoms/Arrow/Arrow";

interface CharacterTemplateProps {
  data: LickApi.ICharacter;
}

export const CharacterTemplate: FC<CharacterTemplateProps> = ({ data }) => {
  const { location, origin, name, avatar } = data;
  console.log(origin, "origin");
  return (
    <StyledCharacterTemplateWrapper>
      <Hero fluidHeroHeight={true}>
        <Title copy="Rick and Morty" />
        <Link href="/">
          <a>
            <Arrow direction="left" />
            Back to character listing
          </a>
        </Link>
        <ProfileImage image={avatar} alt={name} />
        <h2>{name}</h2>
        <p>Origin: {origin?.name ?? "Unknown"}</p>
      </Hero>
      <section>
        {location ? (
          <div>
            <h2>Location details:</h2>
            <p>Name: {location.name}</p>
            <p>Type: {location.type}</p>
            <p>Dimension: {location.dimension}</p>
            <p>No of residents: {location.noOfResidents}</p>
          </div>
        ) : (
          <p>Location Unknown</p>
        )}
      </section>
    </StyledCharacterTemplateWrapper>
  );
};
