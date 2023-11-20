import styles from './page.module.scss';
import { Logo } from './home/Logo';
import { Background } from './home/Background/Background';

export default function Home() {
  return (
    <main className={styles.home}>
      <Logo />
      <Background />
    </main>
  );
}
