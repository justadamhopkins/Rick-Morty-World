import { GetServerSideProps } from "next";
import absoluteUrl from "next-absolute-url";
import { useRouter } from "next/router";

const Character = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>Post: {id}</h1>
    </>
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
