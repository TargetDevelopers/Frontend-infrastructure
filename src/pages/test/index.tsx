import Head from 'next/head';
import useSWR from 'swr';
import { fetcher } from '@/services/axios';

export default function Home() {
  const { data, error } = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    fetcher,
  );
  if (error) {
    return <div>Error</div>;
  }
  return (
    <div>
      <Head>
        <title>Mammut</title>
        <meta name="description" content="welcome to Mammut" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="font-bold text-blue text-base">
        welcome to Mammut
      </div>
      {data?.map((item) => (
        <div>
          <div>id: {item.title}</div>
        </div>
      ))}
      <div>ssssssssssssss</div>
    </div>
  );
}
