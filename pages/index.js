import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'

import Card from '../components/Card.jsx'
import Filters from '../components/Filters.jsx'

import usePokemons from "../hooks/usePokemons";
import usePokemonTypes from "../hooks/usePokemonTypes";


export default function Home() {

  const [types, setTypes, selectedTypes] = usePokemonTypes();
  const filteredPokemons = usePokemons({selectedTypes});

  return (
    <div className={styles.container}>

      <main className={styles.main}>

        <section className={styles.filters}>
          <div>
            <h3>Types</h3>
            <Filters types={types} setTypes={setTypes} />
          </div>

        </section> 

        <div className="card-list">
            { filteredPokemons.map((pokemon, key) => (
                <Card key={key} pokemon={pokemon} />
              ))
            }
        </div>

      </main>

      <footer className={styles.footer}>
            
      </footer>
    </div>
  )
}