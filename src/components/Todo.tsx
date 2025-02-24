
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from "./styles.module.css";
import {useState} from "react";

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
                <input value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Добавить задачу" />
                <button onClick={addTask}>Добавить</button>
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
                <button onClick={clearCompleted} >Очистить выполненные</button>
            </div>
        </div>
    );
};


