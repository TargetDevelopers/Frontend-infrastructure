import Head from 'next/head';

const Dashboard = () => {
  const name = 'Dashboard';
  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <div className="flex">Dashboard</div>
    </>
  );
};

Dashboard.layout = 'admin';

export default Dashboard;
