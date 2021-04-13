import { GetServerSideProps } from "next";
import absoluteUrl from "next-absolute-url";
import { InferGetServerSidePropsType } from "next";
import { TemplateRenderer } from "_shared/TemplateRenderer/TemplateRenderer";

const Character = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <TemplateRenderer
      templateName="character"
      templateProps={{ data }}
      metaTitle={`Rick and Morty Character - ${data.name}`}
    />
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  query: { id },
  req,
}) => {
  const { protocol, host } = absoluteUrl(req, "localhost:3000");

  const res = await fetch(`${protocol}//${host}/api/character/${id}`);

  const data = await res.json();

  return { props: { data } };
};

export default Character;
