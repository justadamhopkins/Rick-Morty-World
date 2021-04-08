import { FC } from "react";
import Head from "next/head";

interface IMetaProps {
  title: string;
}

export const Meta: FC<IMetaProps> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default Meta;
