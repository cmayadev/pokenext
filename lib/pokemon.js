import axios from 'axios';

export const getOfficialArtwork = (number) =>
	`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png`;

export const getDreamWorldArtwork = (number) =>
	`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${number}.svg`;

export const getSprite = (number) =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`;

const getPokemon = async (number) => {
	const { data } = await axios.get(
		`https://pokeapi.co/api/v2/pokemon/${Number(number)}`
	);

	return data;
};

const getListByType = async (type) => {
	const { data } = await axios.get(
		`https://pokeapi.co/api/v2/type/${type}`
	);

	return data;
};

const getPokemons = async () => {
	const { data } = await axios.get(
		`https://pokeapi.co/api/v2/pokemon?limit=12`
	);

	return data;
};

const getSpecies = async (number) => {
	const { data } = await axios.get(
		`https://pokeapi.co/api/v2/pokemon-species/${Number(number)}`
	);

	return data;
};

const getTypes = async () => {
	const { data } = await axios.get(
		`https://pokeapi.co/api/v2/type`
	);

	return data;
};

export const getPokemonsByType = async (type) => {

    const pokemonsData = await getListByType(type);

    const pokemons = pokemonsData.pokemon;

    const list = pokemons.map((pokemon) => (
        pokemon.pokemon
    ))

    return list;

}

export const getPokemonList = async () => {

    const pokemonsData = await getPokemons();

    const pokemons = pokemonsData.results;

    return pokemons;

}

export const getPokemonTypes = async () => {

    const typesData = await getTypes();

    const types = typesData.results;

    return types;

}

export const getPokemonData = async (number) => {

    const pokemonData = await getPokemon(number);
    const speciesData = await getSpecies(number);
    const category = speciesData.genera.filter((genera) => {
		if (genera.language.name === 'en') return genera.genus;
	})[0].genus;
    const entry = "";

    const pokemon = {

        id: pokemonData.id,
        name: pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1),
        category: category,

        abilities: pokemonData.abilities,
		stats: pokemonData.stats,
        types: 
            pokemonData.types.map((type) => (
                type.type.name
        )),

        entry: entry,
        
        height: pokemonData.height,
		weight: pokemonData.weight,

        dream: getDreamWorldArtwork(number),
        official: getOfficialArtwork(number),
        sprite: getSprite(number)

    };

    return pokemon;
};