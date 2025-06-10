// components/TodoList.tsx
"use client";

import styles from './TodoList.module.scss';

export default function TodoList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>
          Lunis <img src="/images/moon.png" alt="Moon image" className={styles.moon}/>
      </h1>


      <div className={styles.card}>
        
        <div className={styles.topBar}>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>

        <h2 className={styles.title}>
          To-Do List
        </h2>

        <ul className={styles.taskList}>
          <li className={styles.taskItem}>
            <div className={styles.left}>
              <span className={`${styles.checkbox} ${styles.checked}`}></span>
              <span className={styles.taskText}>Finish the project</span>
            </div>
            <span className={`${styles.tag} ${styles.work}`}>🗂 work</span>
          </li>
          <li className={styles.taskItem}>
            <div className={styles.left}>
              <span className={styles.checkbox}></span>
              <span className={styles.taskText}>Buy groceries</span>
            </div>
            <span className={`${styles.tag} ${styles.personal}`}>🌷 personal</span>
          </li>
          <li className={styles.taskItem}>
            <div className={styles.left}>
              <span className={styles.checkbox}></span>
              <span className={styles.taskText}>Read a book</span>
            </div>
            <span className={`${styles.tag} ${styles.hobby}`}>📚 hobby</span>
          </li>
          <li className={styles.taskItem}>
            <div className={styles.left}>
              <span className={styles.checkbox}></span>
              <span className={styles.taskText}>Walk the dog</span>
            </div>
            <span className={`${styles.tag} ${styles.personal}`}>📍 personal</span>
          </li>
          <li className={styles.taskItem}>
            <div className={styles.left}>
              <span className={styles.checkbox}></span>
              <span className={styles.taskText}>Plan the trip</span>
            </div>
            <span className={`${styles.tag} ${styles.travel}`}>🧳 travel</span>
          </li>
        </ul>

        <button className={styles.addTask}>+ Add task</button>
      </div>
    </div>
  );
}
