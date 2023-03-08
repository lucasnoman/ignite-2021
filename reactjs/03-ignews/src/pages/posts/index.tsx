import { getPrismicClient } from '@/src/services/prismic';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from './styles.module.scss';
import Prismic from '@prismicio/client';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <Link href={'/'}>
            <time>8 de março de 2021</time>
            <strong>Creating a monorepo with Lerna & Yarn workspaces</strong>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium magni cupiditate labore cumque optio unde vero ipsa.
              Soluta expedita in facilis. Alias pariatur tenetur, culpa ut
              laboriosam iure excepturi aliquid!
            </p>
          </Link>
          <Link href={'/'}>
            <time>8 de março de 2021</time>
            <strong>Creating a monorepo with Lerna & Yarn workspaces</strong>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium magni cupiditate labore cumque optio unde vero ipsa.
              Soluta expedita in facilis. Alias pariatur tenetur, culpa ut
              laboriosam iure excepturi aliquid!
            </p>
          </Link>
          <Link href={'/'}>
            <time>8 de março de 2021</time>
            <strong>Creating a monorepo with Lerna & Yarn workspaces</strong>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium magni cupiditate labore cumque optio unde vero ipsa.
              Soluta expedita in facilis. Alias pariatur tenetur, culpa ut
              laboriosam iure excepturi aliquid!
            </p>
          </Link>
          <Link href={'/'}>
            <time>8 de março de 2021</time>
            <strong>Creating a monorepo with Lerna & Yarn workspaces</strong>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium magni cupiditate labore cumque optio unde vero ipsa.
              Soluta expedita in facilis. Alias pariatur tenetur, culpa ut
              laboriosam iure excepturi aliquid!
            </p>
          </Link>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.get({
    fetch: ['publication.title', 'publication.content'],
    pageSize: 100,
  });

  return {
    props: {},
  };
};
