import { FC } from "react";
import { StyledTitle } from "./styles";

interface Props {
  delay?: number;
  copy: string;
}

export const Title: FC<Props> = ({ copy, delay = 1 }) => {
  return (
    <StyledTitle
      initial={{ backgroundPosition: "0 100%" }}
      animate={{ backgroundPosition: "0% 0%" }}
      transition={{
        duration: 0.7,
        ease: "easeIn",
        delay,
      }}
    >
      {copy}
    </StyledTitle>
  );
};
