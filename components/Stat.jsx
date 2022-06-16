import styles from '../styles/stat.module.scss';

const Stat = ({ status, hidden, skill, children }) => {
    return ( 
        <>
            <div className={ skill ? styles.skill : styles.status}>
                { 
                    status ?
                        status.charAt(0).toUpperCase() + status.slice(1) 
                    :
                    children
                } 
                { hidden ? <img src="/icons/hide.png" /> : '' }
            </div>
        </>
    );
}

export default Stat;