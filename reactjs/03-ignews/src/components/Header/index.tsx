import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/images/logo.svg';
import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headContainer}>
      <div className={styles.headerContent}>
        <Image src={logo} alt='Logo do app' />
        <nav>
          <Link href={'/'} className={styles.active}>
            Home
          </Link>
          <Link href={'/'}>Posts</Link>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
