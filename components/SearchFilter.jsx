import { useState } from 'react';

const SearchFilter = ({setSearchValue}) => {

    const [inputValue, setInputValue] = useState("");
    const onChangeHandler = ({target}) => {
        setInputValue(target.value)
        setSearchValue(target.value)
    }

    return ( 
        <div>
            <input type="text" placeholder="Search" value={inputValue} onChange={onChangeHandler} />
            <input type="reset" value="Clear" />
        </div>
    );
}

export default SearchFilter;