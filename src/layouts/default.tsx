import Head from 'next/head';

interface Props {
  children: HTMLElement;
}

export const Layout = ({ children }: Props) => (
  <>
    <Head>
      <title>Default</title>
      <meta charSet="utf-8" />
    </Head>
    <div>
      <div>{children}</div>
    </div>
  </>
);

export default Layout;
