// Atualiza TodoList.jsx para lidar com modal e tasks dinamicamente
"use client";

import { useState } from "react";
import styles from "./TodoList.module.scss";
import AddTaskModal from "../addTaskModal/addTaskModal";

export default function TodoList() {
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState([
    { title: "Finish the project", category: "work" },
    { title: "Buy groceries", category: "personal" },
    { title: "Read a book", category: "hobby" },
    { title: "Walk the dog", category: "personal" },
    { title: "Plan the trip", category: "travel" },
  ]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>
        Lunis <img src="/images/moon.png" alt="Moon image" className={styles.moon} />
      </h1>

      <div className={styles.card}>
        <div className={styles.topBar}>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>

        <h2 className={styles.title}>To-Do List</h2>

        <ul className={styles.taskList}>
          {tasks.map((task, index) => (
            <li key={index} className={styles.taskItem}>
              <div className={styles.left}>
                <span className={styles.checkbox}></span>
                <span className={styles.taskText}>{task.title}</span>
              </div>
              <span className={`${styles.tag} ${styles[task.category]}`}>
                {task.category === "work"
                  ? "🗂 work"
                  : task.category === "personal"
                  ? "🌷 personal"
                  : task.category === "hobby"
                  ? "📚 hobby"
                  : task.category === "travel"
                  ? "🧳 travel"
                  : "📖 study"}
              </span>
            </li>
          ))}
        </ul>

        <button className={styles.addTask} onClick={() => setShowModal(true)}>
          + Add task
        </button>
      </div>

      {showModal && (
        <AddTaskModal onClose={() => setShowModal(false)} onAddTask={handleAddTask} />
      )}
    </div>
  );
}
