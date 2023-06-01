import styles from './header.module.css'
import toDoImg from '../assets/to-do.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={toDoImg}></img>
        </header>

    )

}