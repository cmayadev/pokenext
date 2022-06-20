import React from 'react'

import styles from './filters.module.scss';

const Filters = ({types, setTypes}) => {

    const onChangeHandler = ({target}) => {
        setTypes(state => {
            const newState = structuredClone(state);
            const type = newState.find(({original}) => original === target.name);
            type.isActive = target.checked;
            return newState;
        })
    };

    return (
        <ul className={styles.filters}>
            {
                types.map(type => 
                    <li key={type.name}>
                        <input type="checkbox" name={type.original} id={type.original} onChange={onChangeHandler} checked={type.isActive}/>
                        <label htmlFor={type.original}>{type.name}</label>
                    </li> 
                )
            }
        </ul>
    );
}

export default Filters;