import { useForm } from 'react-hook-form'
import TaskList from '@/components/tasklist'
import styles from './Home.module.css'
import { useEffect, useState } from 'react'
import { url } from '@/api'

function Home() {
  const { register, handleSubmit, reset } = useForm()
  const [darkMode, setDarkMode] = useState(() => JSON.parse(localStorage.getItem('darkMode')) || false)
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('Todas')

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  useEffect(() => {
    const getTasks = async () => {
      const request = await fetch(url);
      const response = await request.json()
      setTasks(response.tasks)
    }
    getTasks()
  }, [tasks])

  const onSubmit = async (data) => {
    const newTask = {
      title: data.title,
      description: data.description,
      status: 'Pendiente'
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      })
      if (!response.ok) {
        throw new Error('Failed to add task')
      }
      console.log(response)
      reset()
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'Todas') {
      return true;
    }
    else if (filter === 'Pendiente') {
      return task.status === 'Pendiente'
    }
    else if (filter === 'Completada') {
      return task.status === 'Completada'
    }
  })

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.title}>Todo List</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="title"
          {...register('title', { required: true })}
          placeholder="Title"
          className={styles.input}
        />
        <input
          type="text"
          name="description"
          {...register('description', { required: true })}
          placeholder="Description"
          className={styles.input}
        />
        <select
          name="filter"
          value={filter}
          onChange={handleFilterChange}
          className={styles.select}
        >
          <option value="Todas">Todas</option>
          <option value="Pendiente">Pendiente</option>
          <option value="Completada">Completada</option>
        </select>
        <button type="submit" className={styles.addButton}>Add Task</button>
      </form>
      <TaskList tasks={filteredTasks} />
    </div>
  )
}

export default Home
