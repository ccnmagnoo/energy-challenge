import React from 'react';
import Image from 'next/image';
import eg_logo from '@/app/static/eg-logo-short.svg';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.egHeader}>
      <Image src={eg_logo} alt='eg' />
      <nav className={styles.navbar}>
        <ul>
          <li>premios</li>
          <li>ranking</li>
          <li>dashboard</li>
        </ul>
      </nav>
      <section className={styles.session}>session</section>
    </header>
  );
};
