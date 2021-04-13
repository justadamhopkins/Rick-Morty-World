import { FC } from "react";
import { StyledHomePageWrapper, StyledSection } from "./styles";
import { Hero } from "_organisms/Hero/Hero";
import { Title } from "_atoms/Title/Title";
import { Card } from "_molecules/Card/Card";

interface HomeTemplateProps {
  data: LickApi.ICharacterCore[];
}

export const HomeTemplate: FC<HomeTemplateProps> = ({ data }) => {
  return (
    <StyledHomePageWrapper>
      <Hero fluidHeroHeight={false}>
        <Title copy="Rick and Morty" />
      </Hero>
      <StyledSection>
        {data.map(({ name, gender, species, id, avatar }) => {
          return (
            <Card
              key={id}
              name={name}
              gender={gender}
              species={species}
              characterId={id}
              image={avatar}
            />
          );
        })}
      </StyledSection>
    </StyledHomePageWrapper>
  );
};
