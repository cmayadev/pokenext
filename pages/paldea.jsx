import React, { useState, useEffect } from 'react'

import Card from '../components/Card.jsx'
import Filters from '../components/Filters.jsx'
import Status from '../components/Status.jsx'
import SearchFilter from '../components/SearchFilter.jsx'

import usePokemons from "../hooks/usePokemons";
import usePokemonTypes from "../hooks/usePokemonTypes";
import usePokemonStatus from "../hooks/usePokemonStatus";

import styles from '../styles/Home.module.css'

const Paldea = () => {

    const region = "paldea";
    const [searchValue, setSearchValue] = useState("");
    const [types, setTypes, selectedTypes] = usePokemonTypes();
    const [status, setStatus, selectedStatus] = usePokemonStatus();
    const filteredPokemons = usePokemons({selectedTypes, searchValue, region, selectedStatus});

    return (
        <div className={styles.container}>

            <main className={styles.main}>
    
                <section className={styles.filters}>
        
                    <SearchFilter setSearchValue={setSearchValue} />

                    <h3>Status</h3>
                    <Status status={status} setStatus={setStatus} />

                    <h3>Types</h3>
                    <Filters types={types} setTypes={setTypes} />

                </section> 

                <div className="card-list">
                    { 
                        filteredPokemons.map((pokemon, key) => (
                            <Card key={key} pokemon={pokemon} />
                        ))
                    }
                </div>
            
            </main>

        </div>
     
    )

}

export default Paldea;