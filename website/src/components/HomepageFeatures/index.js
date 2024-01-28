import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Software Engineer',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        I finished a Computer Science degree in 3 years at UC Santa Cruz and have 
        worked as a Software Engineer in the San Francisco Bay Area since 2018.
        Check out my LinkedIn or Github links to get a glimpse into my current projects 
        and passions!
      </>
    ),
  },
  {
    title: 'Homelabber',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        This website runs on Olomana, my v2 homelab setup. Check out r/homelab to 
        learn more about the pasttime! I enjoy experimenting with different 
        open source software, basic container orchestration, and the physical aspects 
        of building a high-uptime resource!
      </>
    ),
  },
  {
    title: 'Lifelong Learner',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        As side hobbies, I love cooking new things, improving at volleyball and cycling, 
        & whatever else I am currently fixated on. Check out the PWS Recipes link, the 
        Jake's West Coast channel, or my socials to see what I'm up to!
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
        <Heading as="h3">{title}</Heading>
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
