
import { v4 as uuidv4 } from 'uuid';
import styles from "./styles.module.css";
import {useState} from "react";
import {Button} from "../shared/ui/Button/Button.tsx";
import {Input} from "../shared/ui/Input/Input.tsx";

interface Task {
    id: string;
    text: string;
    completed: boolean;
}

export const Todo = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if (!newTask.trim()) return;
        setTasks([...tasks, { id: uuidv4(), text: newTask, completed: false }]);
        setNewTask("");
    };

    const toggleTask = (id: string) => {
        setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
    };

    const clearCompleted = () => {
        setTasks(tasks.filter(task => !task.completed));
    };

    return (
        <div className={styles.todoContainer}>
            <div className={styles.todoInputGroup}>
                <Input value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Добавить задачу" />
                <Button onClick={addTask}>Добавить</Button>
            </div>
            <div>
                <div>
                    <h2 className={styles.todoTitle}>Список задач</h2>
                    <ul className={styles.todoList}>
                        {tasks.map(task => (
                            <li key={task.id} className={styles.todoItem}>
                                <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
                                <span className={task.completed ? "todo-completed" : ""}>{task.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={styles.todoFooter}>
                <span>{tasks.filter(task => !task.completed).length} задач осталось</span>
                <Button onClick={clearCompleted} >Очистить выполненные</Button>
            </div>
        </div>
    );
};


