const Type = ({ name, text }) => {
    return ( 
        <>
            <div className={`type type-${name}`}>
                <span>{text}</span>
            </div>
        </>
    );
}

export default Type;