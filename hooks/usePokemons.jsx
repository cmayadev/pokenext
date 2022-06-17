import { getPokemonList } from '../lib/pokemon';

const usePokemons = ({selectedTypes}) => {

    const pokemonList = getPokemonList();

    if(selectedTypes.length) {
        pokemonList = pokemonList.filter(pokemon =>
            selectedTypes.some(
                type => pokemon.types.map(function (eachType) { return eachType.name; }).includes(type))
        );
    }

    return pokemonList;

}

export default usePokemons;