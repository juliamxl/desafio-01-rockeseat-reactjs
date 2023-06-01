import { Trash } from '@phosphor-icons/react'
import styles from './tarefas.module.css'

interface TarefasPropsInputs{
    id: number,
    textProps: string,
    did: boolean,
    onDeleteTask: (text: number) => void
    onTaskDid: (id: number) => void
    
}

export function Tarefas({id,textProps, did, onDeleteTask, onTaskDid}: TarefasPropsInputs) {

    function onHandleDeleteTask(){
        onDeleteTask(id)
    }

    function onHandleTaskDid(){
        onTaskDid(id)
    }

    return (
        <div className={did ? styles.taskDid : styles.tarefa}>
            <div className={styles.boxTarefa}>
                <div onClick={onHandleTaskDid} className={styles.checkbox}></div>
                <p className={styles.taskText}>{textProps}</p>
            </div>
            <Trash onClick={onHandleDeleteTask} className={styles.trash} size={24} />
        </div>
    )
}