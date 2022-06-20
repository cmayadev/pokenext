import { useState } from 'react';

const SearchFilter = ({setSearchValue}) => {

    const [inputValue, setInputValue] = useState("");
    const onChangeHandler = ({target}) => {
        setInputValue(target.value)
        setSearchValue(target.value)
    }

    return ( 
        <div>
            <input type="text" className="search" placeholder="Buscar pokemon..." value={inputValue} onChange={onChangeHandler} />
        </div>
    );
}

export default SearchFilter;