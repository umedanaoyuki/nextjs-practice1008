import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import utilStyle from "../styles/utils.module.css";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <section className={utilStyle.headingMd}>
        <p>
          私はフルスタックエンジニアです/Udemy講師として活動しています/好きな言語はJavascriptです
        </p>
      </section>

      <section>
        <h2 className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
          エンジニアのブログ
        </h2>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/" className={utilStyle.boldText}>
              SSGとSSRの使い分けの場面はいつなのか？
            </Link>
            <br />
            <small className={utilStyle.lightText}>February 23, 2020</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/" className={utilStyle.boldText}>
              SSGとSSRの使い分けの場面はいつなのか？
            </Link>
            <br />
            <small className={utilStyle.lightText}>February 23, 2020</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/" className={utilStyle.boldText}>
              SSGとSSRの使い分けの場面はいつなのか？
            </Link>
            <br />
            <small className={utilStyle.lightText}>February 23, 2020</small>
          </article>
        </div>
      </section>
    </Layout>
  );
}
