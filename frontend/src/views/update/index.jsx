import { useForm } from 'react-hook-form'
import styles from '../home/Home.module.css'
import { useEffect, useState } from 'react'
import { url } from '@/api'
import { Link, useNavigate } from 'react-router-dom'

function Update() {
    const { register, handleSubmit, reset } = useForm()
    const [darkMode, setDarkMode] = useState(() => JSON.parse(localStorage.getItem('darkMode')) || false)
    const navigate = useNavigate()

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
        document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
    }, [darkMode])

    const onSubmit = async (data) => {
        const newTask = {
            title: data.title,
            description: data.description,
            status: localStorage.getItem('status')
        }

        try {
            const response = await fetch(`${url}/tasks/${localStorage.getItem('id')}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(newTask),
            })
            if (!response.ok) {
                throw new Error('Failed to add task')
            }
            console.log(response)
            reset()
            navigate('/home')
        } catch (error) {
            console.error('Error:', error)
        }
    }

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
                <button type="submit" className={styles.addButton}>Editar tarea</button>
                <br />
                <Link to={'/home'} className={styles.addButton}>
                    <spans style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>Regresar</spans>
                </Link>
            </form>
        </div>
    )
}

export default Update
