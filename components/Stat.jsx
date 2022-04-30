import styles from '../styles/stat.module.css';

const Stat = ({ status, hidden, skill }) => {
    return ( 
        <>
            <div className={ skill ? styles.skill : styles.status}>
                { status.charAt(0).toUpperCase() + status.slice(1) } {hidden ? <img src="/icons/hide.png" /> : ''}
            </div>
        </>
    );
}

export default Stat;