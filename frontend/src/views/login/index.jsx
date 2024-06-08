import { useForm } from 'react-hook-form'
import styles from '../home/Home.module.css'
import { useEffect, useState } from 'react'
import { url } from '@/api'
import { Link, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

function Login() {
    const { register, handleSubmit, reset } = useForm()
    const [darkMode, setDarkMode] = useState(() => JSON.parse(localStorage.getItem('darkMode')) || false)
    const navigate = useNavigate()

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
        document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
    }, [darkMode])

    const onSubmit = async (data) => {
        const newLogin = {
            email: data.email,
            password: data.password,
        }
    
        try {
            const response = await fetch((`${url}/login`), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newLogin),
            })
            if (!response.ok) {
                toast.error('Usuario no autenticado')
                throw new Error('Failed to login')
            }
            
            const responseData = await response.json();
            
            localStorage.setItem('token', responseData.access_token);
            
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
                <button type="submit" className={styles.addButton}>Login</button>
                <br />
                <Link to={'/register'} className={styles.addButton}>
                    <spans style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>Registrar</spans>
                </Link>
                <br />
            </form>
            <Toaster />
        </div>
    )
}

export default Login
