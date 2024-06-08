import { url } from '@/api';
import styles from './Task.module.css';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Task = ({ id, title, description, status, getTasks}) => {

  const deleteTask = async () => {
    try {
      const response = await fetch(`${url}/tasks/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        mode: 'cors',
      });
      if (!response.ok) {
        throw new Error('Failed to delete task')
      }
    } catch (error) {
      console.error('Error:', error)
    }
    toast.success('Tarea eliminada')
    getTasks()
  }

  const handleToggleStatus = async () => {
    const newTask = {
      title,
      description,
      status: status === "Pendiente" ? 'Completada' : "Pendiente"
    }
    try {
      const response = await fetch(`${url}/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        mode: 'cors',
        body: JSON.stringify(newTask),
      });
      if (!response.ok) {
        throw new Error('Failed to toggle task status')
      }
    } catch (error) {
      console.error('Error:', error)
    }
    getTasks()
  }

  const storeData = () => {
    localStorage.setItem("id", id)
    localStorage.setItem("status", status)
  } 

  return (
    <div className={`${styles.task} ${status === 'Completada' ? styles.completed : ''}`}>
      <h3 className={`${styles.title} ${status === 'Completada' ? styles.completedText : ''}`}>{title}</h3>
      <p className={`${styles.description} ${status === 'Completada' ? styles.completedText : ''}`}>{description}</p>
      <p className={`${styles.status} ${status === 'Completada' ? styles.completedText : ''}`}>{status}</p>
      <div className={styles.buttons}>
        <button onClick={handleToggleStatus}>{status === 'Pendiente' ? 'Marcar como completada' : 'Marcar como pendiente'}</button>
        <Link style={{
          'background': 'var(--primary-color)',
          'color': 'white',
          'border': 'none',
          'padding': '10px',
          'cursor': 'pointer',
          'borderRadius': '5px'
        }} onClick={storeData} to={'/update'}>Editar</Link>
        <button onClick={deleteTask}>Eliminar</button>
      </div>
      <Toaster />
    </div>
  )
}

export default Task;
