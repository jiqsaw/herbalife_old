import Head from 'next/head';

/* eslint-disable-next-line */
export interface DetailProps {
  data: string;
}

export function Detail(props: DetailProps) {
  return (
    <>
      <Head>
        <title>Detail here! {props.data}</title>
      </Head>
      <div>
        <h1>Welcome to deto!</h1>
      </div>
    </>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const res = await fetch('https://.../posts');
  // const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data: 'heyodt'
    },
  };
}


export default Detail;
