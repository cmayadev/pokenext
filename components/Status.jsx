import React from 'react'

import styles from './filters.module.scss';

const Status = ({status, setStatus}) => {

    const onChangeHandler = ({target}) => {
        setStatus(state => {
            const newState = structuredClone(state);
            const status = newState.find(({name}) => name === target.name);
            status.isActive = target.checked;
            return newState;
        })
    };

    return (
        <ul className={styles.filters}>
            {
                status.map(status => 
                    <li key={status.name}>
                        <input type="checkbox" name={status.name} id={status.name} onChange={onChangeHandler} checked={status.isActive}/>
                        <label htmlFor={status.name}>{status.name}</label>
                    </li> 
                )
            }
        </ul>
    );
}

export default Status;