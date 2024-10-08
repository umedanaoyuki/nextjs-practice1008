import Head from "next/head";
import styles from "./layout.module.css";
import { Children } from "react";
import utilStyles from "../styles/utils.module.css";

const name = "shin code";
export const siteTitle = "Next.js Blog";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img src="/images/profile.png" className={utilStyles.borderCircle} />
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
