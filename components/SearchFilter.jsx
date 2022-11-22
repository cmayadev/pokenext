import { useState } from 'react';

const SearchFilter = ({setSearchValue}) => {

    const onChangeHandler = ({target}) => {
        setSearchValue(target.value)
    }

    return ( 
        <div>
            <input type="text" className="search" placeholder="Buscar pokemon..."  onChange={onChangeHandler} />
        </div>
    );
}

export default SearchFilter;