import { getPokemonList } from '../lib/pokemon';

const usePokemons = ({selectedTypes, searchValue, region, selectedStatus}) => {

    const pokemonList = getPokemonList(region);

    let filteredPokemon = [];

    if(region === "paldea") {
        filteredPokemon = pokemonList.filter(pokemon =>
            pokemon.names.toLowerCase().includes(searchValue.toLowerCase())
        );
    } else {
        filteredPokemon = pokemonList.filter(pokemon =>
            pokemon.names.name.toLowerCase().includes(searchValue.toLowerCase())
        );
    }

    if(selectedTypes.length) {
        if(region === "paldea") {
            filteredPokemon = filteredPokemon.filter(pokemon =>
                selectedTypes.some(
                    type => pokemon.types.map(function (eachType) { return eachType; }).includes(type))
            );
        } else {
            filteredPokemon = filteredPokemon.filter(pokemon =>
                selectedTypes.some(
                    type => pokemon.types.map(function (eachType) { return eachType.name; }).includes(type))
            );
        }
    }

    if(selectedStatus.length && selectedStatus == "Registered") {
        filteredPokemon = filteredPokemon.filter(pokemon =>
            pokemon.registered === true
        );
    }

    if(selectedStatus.length && selectedStatus == "No Registered") {
        filteredPokemon = filteredPokemon.filter(pokemon =>
            pokemon.registered === false
        );
    }

    return filteredPokemon;

}

export default usePokemons;