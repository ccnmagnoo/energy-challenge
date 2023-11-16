import React from 'react';
import Image from 'next/image';
import eg_logo from '@/app/static/eg-logo-short.svg';
import styles from './Home.module.scss';

export const Header = () => {
  return (
    <header>
      <section className={styles.logo}>
        <Image src={eg_logo} height={150} width={150} alt='eg' />
      </section>
      <nav>
        <ul>
          <li>link</li>
          <li>link</li>
          <li>link</li>
        </ul>
      </nav>
      <section className={styles.session}>session</section>
    </header>
  );
};
