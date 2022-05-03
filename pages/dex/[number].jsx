import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Header from "../../components/header.jsx";
import Stat from '../../components/Stat.jsx';
import Type from '../../components/Type.jsx';

import styles from "../../styles/pokemon.module.css";

import { getPokemonData } from '../../lib/pokemon';

const Pokemon = ({ pokemonData }) => {

    const router = useRouter();

    return ( 
        <>
            <div className={styles.mainData}>
				<div className={styles.main}>
					<img className={styles.mainImage} alt={pokemonData.name} src={pokemonData.official} />
					<span className={styles.number}>#{pokemonData.id}</span>
	                <span className={styles.name}>{pokemonData.name}</span>
	                <span className={styles.category}>{pokemonData.category}</span>
					<div className={styles.types}>
						{pokemonData.types.map((type, key) => (
							<Type key={key} name={type} />
						))}
					</div>
					<div>
						<span className={styles.title}>Pokédex Entry</span>
						<p className={styles.entry}>{pokemonData.entry}</p>
					</div>
				</div>
				<div className={styles.info}>
					<div className={styles.col}>
						<span className={styles.title}>Data</span>
					</div>
					<div className={styles.col}>
						<span className={styles.title}>Abilities</span>
						{console.log(pokemonData.abilities)}
						{pokemonData.abilities.map((ability, key) => (
							<Stat 
								key={key}
								skill={true}
								status={ability.ability.name}
								hidden={ability.is_hidden ? 'hidden' : ''}
							/>
						))}
						
					</div>
					<div className={styles.col}>
						<span className={styles.title}>Stats</span>
					</div>
				</div>
            </div>
        </>
    );
}

export const getStaticPaths = () => {
	const paths = [...Array(898).keys()].map((_, id) => {
		return { params: { number: String(id + 1) } };
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async ({ params }) => {
	const pokemonData = await getPokemonData(params.number);

	return {
		props: { pokemonData },
	};
};

export default Pokemon;