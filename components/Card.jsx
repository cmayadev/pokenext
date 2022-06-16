import { useState, useEffect } from 'react';

import Link from 'next/link';
import Type from '../components/Type.jsx';

import styles from '../styles/card.module.css';

import { getSprite } from '../lib/pokemon';

const Card = ({ pokemon }) => {

    return ( 
        <>
            <Link href={"/dex/" + pokemon.id}>
                <div className={styles.card}>
                    <img className={styles.image} alt={pokemon.name} src={getSprite(pokemon.id)} />
                    <span className={styles.number}>#{('00' + pokemon.id).slice(-3)}</span>
                    <span className={styles.name}>{pokemon.name}</span>
                    <span className={styles.category}>{pokemon.genera}</span>
                    <div className={styles.types}>
                        {
                            pokemon.types ?
                                pokemon.types.map((type) => (
							        <Type key={type} name={type} />
						    )) : ''
                        }
					</div>
                </div>
            </Link>
        </>
    );
}

export default Card;