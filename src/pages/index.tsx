import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';

import CourseOutline from '@site/src/components/CourseOutline';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <p className={styles.heroEyebrow}>
          <Translate id="home.eyebrow">
            USTHB — Faculté de Génie Civil
          </Translate>
        </p>
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroSubtitle}>
          <Translate id="home.subtitle">
            Hydraulique des canaux : écoulement uniforme, régime critique,
            ressaut hydraulique, courbes de remous et ouvrages.
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/cours/introduction">
            <Translate id="home.cta.start">Commencer le cours</Translate>
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/cours/annexes">
            <Translate id="home.cta.formulary">Formulaire</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title={translate({
        id: 'home.meta.title',
        message: 'Cours d’écoulement à surface libre',
      })}
      description={translate({
        id: 'home.meta.description',
        message:
          'Cours complet d’hydraulique à surface libre : écoulement uniforme, énergie spécifique, ressaut hydraulique, courbes de remous et ouvrages hydrauliques.',
      })}>
      <HomepageHeader />
      <main>
        <CourseOutline />
      </main>
    </Layout>
  );
}
