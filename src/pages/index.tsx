import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <Link className={styles.heroBadge} to="/blog/rebranding">
            📣 Latest update: Scriptura website is live
          </Link>
          <Heading as="h1" className={styles.heroTitle}>
            Scriptura: Scripture for Discord—servers and personal study
          </Heading>
          <p className={styles.heroSubtitle}>
            Quick verse lookups for your community or your own quiet time.
          </p>
          <div className={styles.heroButtons}>
            <Link
              className="button button--primary button--lg"
              to="https://discord.com/oauth2/authorize?client_id=1291760421115527251">
              Add to Discord
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/intro">
              Read the docs
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Scriptura — Scripture for Discord"
      description="Scriptura brings Scripture to Discord for communities and personal study.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
