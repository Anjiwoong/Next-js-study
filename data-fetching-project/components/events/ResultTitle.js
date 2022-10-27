import Button from '../ui/Button';

import styles from './ResultTitle.module.css';

const ResultTitle = ({ date }) => {
  const humanReadableDate = new Date(date).toLocaleDateString('ko-KR', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={styles.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link="/events">Show all events</Button>
    </section>
  );
};

export default ResultTitle;
