import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Card from '../components/Card.jsx'

import { getPokemonList } from '../lib/pokemon';

export const getStaticProps = async () => {
	const pokemonList = await getPokemonList();

	return {
		props: { pokemonList },
	};
};

export default function Home({ pokemonList }) {
  return (
    <div className={styles.container}>

      <main className={styles.main}>

        <div className="card-list">
            {pokemonList.map((pokemon, key) => (
							<Card key={key} pokemon={pokemon} />
						))}
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}