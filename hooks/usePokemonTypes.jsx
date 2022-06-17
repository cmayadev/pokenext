import { useState } from "react";

const usePokemonTypes =  () => {

    const initialTypes = [
        {name: "Acero", original: "steel", isActive: false},
        {name: "Agua", original: "water", isActive: false},
        {name: "Bicho", original: "bug", isActive: false},
        {name: "Dragón", original: "dragon", isActive: false},
        {name: "Eléctrico", original: "electric", isActive: false},
        {name: "Fantasma", original: "ghost", isActive: false},
        {name: "Fuego", original: "fire", isActive: false},
        {name: "Hada", original: "fairy", isActive: false},
        {name: "Hielo", original: "ice", isActive: false},
        {name: "Lucha", original: "fighting", isActive: false},
        {name: "Normal", original: "normal", isActive: false},
        {name: "Psíquico", original: "psychic", isActive: false},
        {name: "Roca", original: "rock", isActive: false},
        {name: "Oscuridad", original: "dark", isActive: false},
        {name: "Planta", original: "grass", isActive: false},
        {name: "Tierra", original: "ground", isActive: false},
        {name: "Veneno", original: "poison", isActive: false},
        {name: "Volador", original: "flying", isActive: false},
    ];

    const [types, setTypes] = useState(initialTypes);
    const selectedTypes = types.filter(type => type.isActive).map(type => type.original);

    return [types, setTypes, selectedTypes];
};

export default usePokemonTypes;