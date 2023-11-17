import React from 'react';
import Image from 'next/image';
import styles from './Logo.module.scss';
import logo from '@/app/static/eg-logo-loop.svg';

export const Logo = ({ date = new Date() }: { date?: Date }) => {
  return (
    <article id={styles.central_logo}>
      <h1 id={styles.contest_year}>{date.getFullYear()}</h1>
      <Image id={styles.loop_logo} src={logo} alt={'logo'} />
    </article>
  );
};
