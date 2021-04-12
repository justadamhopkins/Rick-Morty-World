import { FC } from "react";
import { StyledMain } from "./styles";

export const SharedLayout: FC = ({ children }) => {
  return (
    <>
      <StyledMain>{children}</StyledMain>
    </>
  );
};
