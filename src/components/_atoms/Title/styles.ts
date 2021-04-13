import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledTitle = styled(motion.h1)`
  text-align: center;
  background-size: 100% 200%;
  background-image: linear-gradient(
    var(--secondaryBackground) 50%,
    var(--background) 50%
  );
  padding-top: 20px;
  display: inline-block;
  transform: skew(-5deg);
  color: var(--darkPurps);
  padding: 5px;
  margin: 0px 15px;
`;
