import { url } from '@/api';
import styles from './Task.module.css';
//import { useState } from 'react';

const Task = ({ id, title, description, status}) => {

  //const [newStatus, setNewStatus] = useState(status)

  const deleteTask = async () => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: 'DELETE',
        mode: 'cors'
      });
      if (!response.ok) {
        throw new Error('Failed to delete task')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleToggleStatus = async () => {
    const newTask = {
      title,
      description,
      status: status === "Pendiente" ? 'Completada' : "Pendiente"
    }
    try {
      const response = await fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          mode: 'cors'
        },
        body: JSON.stringify(newTask),
      });
      if (!response.ok) {
        throw new Error('Failed to toggle task status');
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className={`${styles.task} ${status === 'Completada' ? styles.completed : ''}`}>
      <h3 className={`${styles.title} ${status === 'Completada' ? styles.completedText : ''}`}>{title}</h3>
      <p className={`${styles.description} ${status === 'Completada' ? styles.completedText : ''}`}>{description}</p>
      <p className={`${styles.status} ${status === 'Completada' ? styles.completedText : ''}`}>{status}</p>
      <div className={styles.buttons}>
        <button onClick={handleToggleStatus}>{status === 'Pendiente' ? 'Marcar como completada' : 'Marcar como pendiente'}</button>
        <button>Edit</button>
        <button onClick={deleteTask}>Delete</button>
      </div>
    </div>
  );
};

export default Task;
