import { useState, useEffect } from 'react';

import Link from 'next/link';
import Type from '../components/Type.jsx';

import styles from '../styles/card.module.css';

import { getPokemonData } from '../lib/pokemon';

const Card = ({ pokemon }) => {

    const url = pokemon.url;
    const last = url.split("/");
    const number = last[last.length-2];

    const [pkmn, setPkmn] = useState('');

    useEffect(() => {
        async function getPokemon() {
            const pokemonData = await getPokemonData(number);
            setPkmn(pokemonData);
        }
        getPokemon();
    }, []);

    return ( 
        <>
            <Link href={"/dex/" + pkmn.id}>
                <div className={styles.card}>
                    <img className={styles.image} alt={pkmn.name} src={pkmn.sprite} />
                    <span className={styles.number}>#{('00' + pkmn.id).slice(-3)}</span>
                    <span className={styles.name}>{pkmn.name}</span>
                    <span className={styles.category}>{pkmn.category}</span>
                    <div className={styles.types}>
                        {
                            pkmn.types ?
                                pkmn.types.map((type, key) => (
							        <Type key={key} name={type} />
						    )) : ''
                        }
					</div>
                </div>
            </Link>
        </>
    );
}

export default Card;