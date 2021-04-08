import { FC } from "react";
import {
  Wrapper,
  IntroImage,
  IntroCopy,
  StyledHomePageWrapper,
} from "./styles";
import { Button } from "_atoms/Button/Button";
import { Meta } from "_shared/Meta/Meta";
import { Hero } from "_organisms/Hero/Hero";
import { Title } from "_atoms/Title/Title";
import { Card } from "_molecules/Card/Card";

interface IIntroTemplateProps {
  className?: string;
  title: string;
}

export const HomeTemplate: FC<IIntroTemplateProps> = ({ className, title }) => {
  return (
    <>
      <Meta title={title} />
      <StyledHomePageWrapper>
        <Hero>
          <Title copy="Rick and Morty" />
        </Hero>
        <Card />
      </StyledHomePageWrapper>
    </>
  );
};
