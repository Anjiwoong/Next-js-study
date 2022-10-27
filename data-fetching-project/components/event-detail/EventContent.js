import styles from './EventContent.module.css';

const EventContent = props => {
  return <section className={styles.content}>{props.children}</section>;
};

export default EventContent;
