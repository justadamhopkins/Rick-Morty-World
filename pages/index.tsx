import { NextPage } from "next";
import { TemplateRenderer } from "_shared/TemplateRenderer/TemplateRenderer";
import { GetServerSideProps } from "next";
import { InferGetServerSidePropsType } from "next";
import absoluteUrl from "next-absolute-url";

const HomePage: NextPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <TemplateRenderer
      templateName="home"
      templateProps={{ title: "Rick and Morty FE Tech Test", data }}
      metaTitle="Rick and Morty"
    />
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { protocol, host } = absoluteUrl(req, "localhost:3000");

  const res = await fetch(`${protocol}//${host}/api/characters`);

  const data = await res.json();

  return { props: { data } };
};

export default HomePage;
