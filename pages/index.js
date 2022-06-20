import React, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'

import Card from '../components/Card.jsx'
import Filters from '../components/Filters.jsx'
import SearchFilter from '../components/SearchFilter.jsx'

import usePokemons from "../hooks/usePokemons";
import usePokemonTypes from "../hooks/usePokemonTypes";


export default function Home() {

  const [searchValue, setSearchValue] = useState("");
  const [types, setTypes, selectedTypes] = usePokemonTypes();
  const filteredPokemons = usePokemons({selectedTypes, searchValue});

  return (
    <div className={styles.container}>

      <SearchFilter setSearchValue={setSearchValue} />

      <main className={styles.main}>

        <section className={styles.filters}>
            <h3>Types</h3>
            <Filters types={types} setTypes={setTypes} />
        </section> 

        <div className="card-list">
            { filteredPokemons.map((pokemon, key) => (
                <Card key={key} pokemon={pokemon} />
              ))
            }
        </div>

      </main>

    </div>
  )
}