import styles from './text.module.css'


interface textProps{
    taskDo : number,
    tasksDid : number
}

export function TextDo({taskDo, tasksDid} : textProps) {
    return (
        <div className={styles.text}>
            <div className={styles.textCriadas}>
                <p>Tarefas Criadas <span>{taskDo}</span></p>
            </div>
            <div className={styles.textConcluidas}>
                <p>Concluídas <span>{tasksDid} de {taskDo}</span></p>
            </div>
        </div>
    )
}