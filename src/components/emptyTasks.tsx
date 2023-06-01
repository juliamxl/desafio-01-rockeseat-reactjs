import empty from '../assets/empty.svg'
import styles from './emptyTasks.module.css'

export function EmptyTasks() {
    return (
        //aparece quando não há tarefas
        <div className={styles.emptyTasks}>
            <img src={empty} />
            <b>Você ainda não tem tarefas cadastradas!</b>
            <p>Crie tarefas e organize seus itens a fazer. </p>
        </div>
    )
}