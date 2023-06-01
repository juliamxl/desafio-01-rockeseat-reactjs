import { PlusCircle } from '@phosphor-icons/react';
import { ChangeEvent, FormEvent, InputHTMLAttributes, useState } from 'react';
import styles from '../components/input.module.css';
import { EmptyTasks } from './emptyTasks';
import { Tarefas } from './tarefas';
import { TextDo } from './textDo';

interface Objeto {
    id: number;
    descricao: string;
    did: boolean;
    onDeleteTask?: (text: string) => void
    onTaskDid?: (did: boolean) => void
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}

export function Input({ ...props }: InputProps) {

    const [tasks, setTasks] = useState<Objeto[]>([])

    var taskDo: number = 0
    var tasksDid: number = 0

    tasksDid = tasks.filter(task => task.did == true).length

    taskDo = tasks.length

    const [did, setDid] = useState(false)

    const [newTextTask, setNewTextTask] = useState('')

    const isNewTaskEmpty = newTextTask.length == 0;

    function onHandleDeleteComment(id: number) {
        setTasks(tasks.filter((tarefa) => tarefa.id !== id));
    }

    function handleTaskDid(id: number) {
        setTasks((prevTasks) =>
            prevTasks.map((task) => {
                if (task.id === id && task.did == false) {
                    return { ...task, did: true };
                } else if (task.id === id && task.did == true) {
                    return { ...task, did: false };
                }
                return task;
            })
        );
    }

    function handleSendNewTask(event: FormEvent) {
        event.preventDefault()


        const infoTasks: Objeto = {
            id: Math.random(),
            descricao: newTextTask,
            did: did
        }

        setTasks([...tasks, infoTasks])
        setNewTextTask('')
    }

    function handleCreateNewTextTask(event: ChangeEvent<HTMLInputElement>) {
        setNewTextTask(event.target.value);
    }

    return (
        <form className={styles.container}>
            <input placeholder='Digite sua tarefa!' value={newTextTask} onChange={handleCreateNewTextTask} className={styles.input} {...props} />
            <button type="submit" disabled={isNewTaskEmpty} onClick={handleSendNewTask} className={styles.button}>
                Criar
                <PlusCircle size={22} />
            </button>
            <div className={styles.tarefas}>
                <TextDo tasksDid={tasksDid} taskDo={taskDo} />
                <div className={styles.tarefa}>
                    {
                        tasks.length > 0 ?
                            tasks.map(tarefa => {
                                return (
                                    <Tarefas id={tarefa.id} onTaskDid={handleTaskDid}
                                        textProps={tarefa.descricao}
                                        did={tarefa.did}
                                        onDeleteTask={onHandleDeleteComment}
                                    />
                                )
                            }) :
                            <EmptyTasks />
                    }

                </div>
            </div>
        </form>
    )

}