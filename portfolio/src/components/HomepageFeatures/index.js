import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Programming Languages',
    Svg: require('@site/static/img/programming-monitor.svg').default,
    description: (
      <>
          <p className={styles.programmingList}>Java - <span className={styles.programmingDotFull}>⬤ ⬤ ⬤ ⬤ ⬤</span></p>
          <p className={styles.programmingList}>C - <span className={styles.programmingDotFull}>⬤ ⬤ ⬤ ⬤ ⬤</span></p>
          <p className={styles.programmingList}>Python - <span className={styles.programmingDotFull}>⬤ ⬤ ⬤ ⬤</span> ⬤</p>
          <p className={styles.programmingList}>SQL - <span className={styles.programmingDotFull}>⬤ ⬤ ⬤</span> ⬤ ⬤</p>
          <p className={styles.programmingList}>Typescript - <span className={styles.programmingDotFull}>⬤ ⬤</span> ⬤ ⬤ ⬤</p>
          <p className={styles.proficiencyNote}>(Proficiency ranked 1 to 5. Orange being filled)</p>
      </>
    ),
  },
  {
    title: 'Contact Information',
    Svg: require('@site/static/img/smartphone.svg').default,
    description: (
      <>
        <b>Name:</b> Logan Zehm<br></br>
        <b>Email:</b> loganzehm@gmail.com<br></br>
        <b>Linkedin:</b> <a href="https://www.linkedin.com/in/logan-zehm/" target="_blank">linkedin.com/in/logan-zehm</a><br></br>
        <b>Github:</b> <a href="https://github.com/Logon27" target="_blank">github.com/Logon27</a><br></br>
      </>
    ),
  },
  {
    title: 'Misc Skills',
    Svg: require('@site/static/img/edit-tools-ruler.svg').default,
    description: (
      <>
        <p className={styles.miscSkills}>Docker</p>
        <p className={styles.miscSkills}>Kubernetes</p>
        <p className={styles.miscSkills}>Azure Pipelines</p>
        <p className={styles.miscSkills}>React</p>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
