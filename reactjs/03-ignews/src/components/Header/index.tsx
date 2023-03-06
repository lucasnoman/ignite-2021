import Image from 'next/image';
import Link from 'next/link';
import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headContainer}>
      <div className={styles.headerContent}>
        <Image
          src={'/images/logo.svg'}
          width={80}
          height={80}
          alt='Logo do app'
          priority
        />
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
