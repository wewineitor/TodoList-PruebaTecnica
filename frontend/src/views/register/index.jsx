import { useForm } from 'react-hook-form'
import styles from '../home/Home.module.css'
import { useEffect, useState } from 'react'
import { url } from '@/api'
import { Link, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

function Register() {
    const { register, handleSubmit, reset } = useForm()
    const [darkMode, setDarkMode] = useState(() => JSON.parse(localStorage.getItem('darkMode')) || false)
    const navigate = useNavigate()

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
        document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
    }, [darkMode])

    const onSubmit = async (data) => {
        const newLogin = {
            name: data.name,
            email: data.email,
            password: data.password,
            password_confirmation: data.password
        }

        try {
            const response = await fetch((`${url}/register`), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newLogin),
            })
            if (!response.ok) {
                toast.error('Usuario ya registrado')
                throw new Error('Failed to register')
            }
            navigate('/')
            reset()
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
                    name="name"
                    {...register('name', { required: true })}
                    placeholder="Nombre"
                    className={styles.input}
                />
                <input
                    type="email"
                    name="email"
                    {...register('email', { required: true })}
                    placeholder="email"
                    className={styles.input}
                />
                <input
                    type="password"
                    name="password"
                    {...register('password', { required: true })}
                    placeholder="Contraseña"
                    className={styles.input}
                />
                <button type="submit" className={styles.addButton}>Registar</button>
                <br />
                <Link to={'/'} className={styles.addButton}>
                    <spans style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>Regresar</spans>
                </Link>
            </form>
            <Toaster />
        </div>
    )
}

export default Register