const Type = ({ name }) => {
    return ( 
        <>
            <div className={`type type-${name}`}>
                <span>{name}</span>
            </div>
        </>
    );
}

export default Type;