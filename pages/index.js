import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello my name is Alyssa  and im a graduating student from University of the Assumption and currently taking an internship in twistresources</p>
        <p>
        
          <a href="https://portfolio-potpzxa.format.com/"> heres my portfolio;)</a>
        </p>
      </section>
    </Layout>
  );
}