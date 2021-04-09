import { FC } from "react";
import { StyledHomePageWrapper, StyledSection } from "./styles";
import { Meta } from "_shared/Meta/Meta";
import { Hero } from "_organisms/Hero/Hero";
import { Title } from "_atoms/Title/Title";
import { Card } from "_molecules/Card/Card";

interface HomeTemplateProps {
  title: string;
  data: LickApi.ICharacterCore[];
}

const cardVariant = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
      staggerDirection: 1,
      when: "afterChildren",
    },
  },
};

export const HomeTemplate: FC<HomeTemplateProps> = ({ title, data }) => {
  return (
    <>
      <Meta title={title} />
      <StyledHomePageWrapper>
        <Hero>
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
    </>
  );
};
