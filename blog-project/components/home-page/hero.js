import Image from 'next/image';
import styles from './hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/woong.jpg"
          alt="An image showing Woong"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m Woong</h1>
      <p>
        I blog about web development - especially frontend frameworks like React
        or Vue.
      </p>
    </section>
  );
};

export default Hero;
