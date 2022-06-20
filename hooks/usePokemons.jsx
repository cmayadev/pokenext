import { getPokemonList } from '../lib/pokemon';

const usePokemons = ({selectedTypes, searchValue}) => {

    const pokemonList = getPokemonList();

    let filteredPokemon = pokemonList.filter(pokemon =>
        pokemon.names.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    if(selectedTypes.length) {
        filteredPokemon = filteredPokemon.filter(pokemon =>
            selectedTypes.some(
                type => pokemon.types.map(function (eachType) { return eachType.name; }).includes(type))
        );
    }

    return filteredPokemon;

}

export default usePokemons;