import { FC } from "react";
import Image from "next/image";

interface Props {
  path: string;
  altText: string;
}

export const ProfileImage: FC<Props> = ({ path, altText }) => {
  return <Image src={path} alt={altText} layout="fill" />;
};
