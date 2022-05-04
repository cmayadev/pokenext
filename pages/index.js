import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
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

  const [type, setType] = useState([]);
  const [filteredType, setFilteredType] = useState([]);

  const handleChange = e => {
    if (e.target.checked) {
      setType([...type, e.target.value]);
    } else {
      setType(type.filter(id => id !== e.target.value));
    }
  };

  useEffect(() => {
    if (type.length === 0) {
      setFilteredType(pokemonList)
      console.log(pokemonList);
    } else {
      setFilteredType(
        pokemonList.filter(pokemon =>
          type.some(category => [pokemon.types].flat().includes(category))
        )
      )
    }
  }, [type])

  return (
    <div className={styles.container}>

      <main className={styles.main}>

        <div className={styles.filters}>
          <div className={styles.filter}>
            <h3>Generation</h3>
            <div>
              <input
                id="2"
                type="checkbox"
                title="Fire"
                value="fire"
                onChange={handleChange}
              />
              <label htmlFor="2">Fire</label>
            </div>
          </div>
        </div> 

        <div className="card-list">
            { filteredType.map((pokemon, key) => (
                <Card key={key} pokemon={pokemon} />
              ))
            }
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