import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'

import Card from '../components/Card.jsx'

import { getPokemonList, getPokemonTypes, getPokemonsByType } from '../lib/pokemon';

export const getStaticProps = async () => {
	const pokemonList = await getPokemonList();
	const pokemonTypes = await getPokemonTypes();

	return {
		props: { pokemonList, pokemonTypes },
	};
};

export default function Home({ pokemonList, pokemonTypes }) {

  const [type, setType] = useState([]);
  const [filteredType, setFilteredType] = useState([]);

  const handleChange = async (e) => {
      setFilteredType([]);
      pokemonList = await getPokemonsByType(e.target.value);
      setFilteredType(pokemonList)
  };

  useEffect(() => {
      setFilteredType(pokemonList)
  }, [])

  return (
    <div className={styles.container}>

      <main className={styles.main}>

        <div className={styles.filters}>
          <div className={styles.filter}>
            <h3>Types</h3>
              { pokemonTypes.map((type, key) => (
                  <div key={key}>
                    <input
                      id={key}
                      type="radio"
                      name="type"
                      title={type.name.charAt(0).toUpperCase() + type.name.slice(1)}
                      value={type.name}
                      onChange={handleChange}
                    />
                    <label htmlFor={key}>{type.name.charAt(0).toUpperCase() + type.name.slice(1)}</label>    
                  </div>
                ))
              }
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