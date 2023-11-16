import styles from './page.module.css';
import logo from '@/app/static/eg-logo-loop.svg';
import Image from 'next/image';

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <Image src={logo} width={'1000'} alt={'logo'} />
      </section>
    </main>
  );
}
