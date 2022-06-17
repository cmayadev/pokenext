import React from 'react'

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
        <>
            {
                types.map(type => 
                    <div key={type.name}>
                        <label key={type.name}>
                            <input type="checkbox" name={type.original} id={type.original} onChange={onChangeHandler} checked={type.isActive}/>
                            <span>{type.name}</span>
                        </label>
                    </div> 
                )
            }
        </>
    );
}

export default Filters;