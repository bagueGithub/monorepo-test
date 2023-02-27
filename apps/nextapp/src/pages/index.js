import Head from 'next/head'
import styles from '@/styles/Home.module.css'

import {getSiteInfo} from 'site-info';

export default function Home() {
  let siteInfo = getSiteInfo();

  return (
    <div className={styles.container}>
      <Head>
        <title>{siteInfo.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*Output the site title and subtitle to the screen*/}
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to {siteInfo.title}</h1>
        <p className={styles.description}>{siteInfo.subtitle}</p>
      </main>
    </div>
  );
}