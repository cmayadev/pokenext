import Container from '../Container.jsx';

import Link from 'next/link';

import styles from '../../styles/header.module.scss'

const Header = () => {
    return ( 
        <>
            <nav className={styles.header}>
                <Container>
                    <ul className={styles.navlist}>
                        <li>
                            <Link href={"/"}>POKEDEX</Link>
                        </li>
                        <li>
                            <Link href={"/"}>
                                Home
                            </Link>
                        </li>
                        <li>Types</li>
                        <li>
                            <Link href={"/paldea"}>Paldea</Link>
                        </li>
                    </ul>
                </Container>
            </nav>
        </>
    );
}

export default Header;