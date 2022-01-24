import { Title } from "../components/Title/Title";

function Home({ dummytext }) {
  return (
    <div>
      <Title />
      <p>{dummytext}</p>
    </div>
  );
}

export const getServerSideProps = async () => {
  const dummytext = "So we can activate SSR";

  return {
    props: {
      dummytext,
    },
  };
};

export default Home;
