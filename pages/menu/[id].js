import { useRouter } from 'next/router';
import React from 'react';
import DetailsPage from '../../componants/templates/DetailsPage';

const Details = ({ data }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h2>LOading page....</h2>;
  }

  return (
    <div>
      <DetailsPage {...data} />
    </div>
  );
};

export default Details;

export async function getStaticPaths() {
  const res = await fetch('http://localhost:4000/data');
  const json = await res.json();
  const data = json.slice(0, 10);

  const paths = data.map((food) => ({
    params: { id: food.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const {
    params: { id },
  } = context;

  const res = await fetch(`http://localhost:4000/data/${id}`);
  const data = await res.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
    revalidate: 10,
  };
}
