import { useRouter } from 'next/router';

import Link from 'next/link';
import Stat from '../../components/Stat.jsx';
import Type from '../../components/Type.jsx';

import styles from "../../styles/pokemon.module.scss";

import { getPokemonData, getPokemonList, getSprite } from '../../lib/pokemon';

const Pokemon = ({ pokemonData, pokemonList }) => {

    const router = useRouter();

	const pokemon = pokemonList.find(({ id }) => id === pokemonData.id)
	const prev = pokemonList.find(({ id }) => id === pokemonData.id - 1)
    const next = pokemonList.find(({ id }) => id === pokemonData.id + 1)

    return ( 
        <>
            <div className={styles.mainData}>
				<div className={`colored ${pokemon.types[0].name}`}></div>
				<div className={styles.main}>
					<img className={styles.mainImage} alt={pokemonData.name} src={pokemonData.dream} />
					<span className={styles.number}>#{pokemon.entry}</span>
	                <span className={styles.name}>{pokemonData.name}</span>
	                <span className={styles.category}>{pokemon.genera['es']}</span>
					<div className={styles.types}>
						{pokemon.types.map((type) => (
							<Type key={type.name} name={type.name} text={type.languages['es']} />
						))}
					</div>
					<div>
						<span className={styles.title}>Pokédex Entry</span>
						<p className={styles.entry}>{pokemonData.entry.replace(/(\r\n|\n|\r)/gm, "")}</p>
					</div>
					<div className={styles.position}>
						{
							prev ?
								<Link href={"/dex/" + prev.id}>
									<div className={styles.prev}>
										<div> {"<"} </div>
										<img className={styles.miniature} src={getSprite(prev.id)} />
										<span>{prev.names.languages['es']}</span>
									</div>
								</Link>
							:
								<Link href={"/"}>
									<div className={styles.prev}>
										<div> {"<"} </div>
										<span>Home</span>
									</div>
								</Link>

						}
						{
							next &&
							<Link href={"/dex/" + next.id}>
								<div className={styles.next}>
									<span>{next.names.languages['es']}</span>
									<img className={styles.miniature} src={getSprite(next.id)} />
									<div> {">"} </div>
								</div>
							</Link>
						}
					</div>
				</div>
				<div className={styles.info}>
					<div className={styles.col}>
						<span className={styles.title}>Data</span>
						<div>
							<Stat status="" skill={true}>
								<span>Height</span>
								<span>{pokemonData.height} m</span>
							</Stat>
							<Stat status="" skill={true}>
								<span>Weight</span>
								<span>{pokemonData.weight} kg</span>
							</Stat>
							<Stat status="" skill={true}>
								<span>Capture Rate</span>
								<span>{pokemonData.cap_rate}</span>
							</Stat>
							<Stat status="" skill={true}>
								<span>Base Happiness</span>
								<span>{pokemonData.base_happy}</span>
							</Stat>
						</div>
					</div>
					<div className={styles.col}>
						<span className={styles.title}>Abilities</span>
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
						<div className={styles.status}>
							{
								pokemonData.stats.map((stat, key) => (
									<Stat
										key={key}
										status=""
										skill={true}
									>
										<div className={styles.stat}>{stat.stat.name}</div>
										<span>{stat.base_stat}</span>
									</Stat>
								))
							}
						</div>
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
	const pokemonList = await getPokemonList();

	return {
		props: { pokemonData, pokemonList },
	};
};

export default Pokemon;