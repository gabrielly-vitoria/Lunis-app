"use client"

import { useState } from 'react';
import styles from './addTaskModal.module.scss';

export default function AddTaskModal({ onClose, onAddTask }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('work');
  const [startDate, setStartDate] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = () => {
    if (!title.trim()) return;
    onAddTask({ title, category, startDate, dueDate });
    onClose();
  };

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modal}>
        <h3 className={styles.modalTitle}>Add a new task ✨</h3>
        <label>
          Title:
          <input value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g. Finish report" />
        </label>
        <label>
          Category:
          <select value={category} onChange={e => setCategory(e.target.value)}>
            <option value="work">🗂 Work</option>
            <option value="personal">🌷 Personal</option>
            <option value="hobby">📚 Hobby</option>
            <option value="travel">🧳 Travel</option>
            <option value="study">📖 Study</option>
          </select>
        </label>
        <label>
          Start Date:
          <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
        </label>
        <label>
          Due Date:
          <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} />
        </label>
        <div className={styles.actions}>
          <button onClick={handleSubmit}>➕ Add</button>
          <button onClick={onClose}>❌ Cancel</button>
        </div>
      </div>
    </div>
  );
}
