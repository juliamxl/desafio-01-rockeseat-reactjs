import styles from './button.module.css'
import {PlusCircle} from '@phosphor-icons/react';

export function Button() {
    return (
        <button className={styles.button}>
            Criar
            <PlusCircle size={22} />
        </button>
    )
}