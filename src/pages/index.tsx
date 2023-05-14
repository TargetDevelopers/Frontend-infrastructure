import Head from 'next/head';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';
import styles from '../styles/Home.module.css';

const Title = styled.h1`
  color: blue;
`;

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <div className={styles.container}>
      <Head>
        <title>Mammut</title>
        <meta name="description" content="welcome to Mammut" />
        asdasd asd asd asd asd asd asd asd asd asd asd asd sad ds
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="font-bold text-blue text-base">
        welcome to Mammut
      </div>
      <Title>styled component</Title>

      <Link href="/dashboard">
        <div>{t('Dashboard')}</div>
      </Link>
    </div>
  );
}
