import { FC } from "react";
import { StyledPortfolioWrapper } from "./styles";
import Image from "next/image";

interface Props {
  image: string;
  alt: string;
}

export const ProfileImage: FC<Props> = ({ image, alt }) => {
  return (
    <StyledPortfolioWrapper>
      <Image
        src={image}
        alt={alt}
        height={400}
        width={400}
        layout="responsive"
      />
    </StyledPortfolioWrapper>
  );
};

export default ProfileImage;
