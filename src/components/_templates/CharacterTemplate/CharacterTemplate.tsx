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
  console.log(data);
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
        <ProfileImage image={data.avatar} alt={data.name} />
        <h2>{data.name}</h2>
        <p>Origin: {data.origin.name}</p>
      </Hero>
    </StyledCharacterTemplateWrapper>
  );
};
