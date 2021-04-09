import { NextPage } from "next";
import { TemplateRenderer } from "_shared/TemplateRenderer/TemplateRenderer";
import { GetServerSideProps } from "next";
import { InferGetServerSidePropsType } from "next";

const HomePage: NextPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <TemplateRenderer
      templateName="home"
      templateProps={{ title: "Rick and Morty FE Tech Test", data }}
    />
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/characters");
  const data = await res.json();

  return { props: { data } };
};

export default HomePage;
