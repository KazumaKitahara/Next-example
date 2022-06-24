import Head from 'next/head';
import styles from './Home.module.scss';
import {NextPageWithLayout} from './_app';
import {ReactElement} from 'react';
import HeaderLayout from '../layouts/Header';

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <Head>
        <title>Todo List</title>
        <meta name="description" content="Nuxt.jsで作成したTODOリストです"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        ここがメインです
      </main>
    </div>
  );
};

Home.getLayout = (page: ReactElement) => {
  return (
    <HeaderLayout>
      {page}
    </HeaderLayout>
  );
};

export default Home;
