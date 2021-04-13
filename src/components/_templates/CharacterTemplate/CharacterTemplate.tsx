import { FC } from "react";
import { Hero } from "_organisms/Hero/Hero";
import { Title } from "_atoms/Title/Title";
import ProfileImage from "_atoms/ProfileImage/ProfileImage";
import { StyledCharacterTemplateWrapper } from "./styles";

interface CharacterTemplateProps {
  data: LickApi.ICharacter;
}

export const CharacterTemplate: FC<CharacterTemplateProps> = ({ data }) => {
  return (
    <StyledCharacterTemplateWrapper>
      <Hero>
        <Title copy="Rick and Morty" />
        <ProfileImage image={data.avatar} alt={data.name} />
      </Hero>
    </StyledCharacterTemplateWrapper>
  );
};
