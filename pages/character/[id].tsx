import { GetServerSideProps } from "next";
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
}) => {
  const res = await fetch(`http://localhost:3000/api/character/${id}`);

  const data = await res.json();

  return { props: { data } };
};

export default Character;
