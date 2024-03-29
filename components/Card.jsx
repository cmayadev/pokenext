import { useState, useEffect } from 'react';

import Link from 'next/link';
import Type from '../components/Type.jsx';

import styles from '../styles/card.module.css';

import { getSprite } from '../lib/pokemon';

const Card = ({ pokemon }) => {

    return ( 
        <>
            {
                pokemon.id ? 
                        <Link href={"/dex/" + pokemon.id}>
                            <div className={styles.card}>
                                <img className={styles.image} alt={pokemon.name} src={pokemon.images.sprite} />
                                <span className={styles.number}>#{('00' + pokemon.id).slice(-3)}</span>
                                <span className={styles.name}>{pokemon.names.languages['es']}</span>
                                <span className={styles.category}>{pokemon.genera['es']}</span>
                                <div className={styles.types}>
                                    {
                                        pokemon.types ?
                                            pokemon.types.map((type) => (
                                                <Type key={type.name} name={type.name} text={type.languages['es']} />
                                        )) : ''
                                    }
                                </div>
                            </div>
                        </Link> 
                        :
                        <div className={styles.card}>
                            {
                                pokemon.registered && <img className={styles.registered} alt="registered" src="sprites/pokeball.png" />
                            }
                            <img className={styles.image} alt={pokemon.names} src={`sprites/${pokemon.entry} - ${pokemon.names}.png`} width="96" />
                            <span className={styles.number}>#{('00' + pokemon.entry).slice(-3)}</span>
                            <span className={styles.name}>{pokemon.names}</span>
                            <span className={styles.category}>{pokemon.genera}</span>
                            <div className={styles.types}>
                                {
                                    pokemon.types ?
                                        pokemon.types.map((type) => (
                                            <Type key={type} name={type} text={type} />
                                    )) : ''
                                }
                            </div>
                        </div>
            }
        </>
    );
}

export default Card;