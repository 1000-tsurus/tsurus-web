import { useAuth } from '@/Hooks/auth'
import { CircularProgress } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { All } from './style'
import LoginIlustration from '../../Assets/ilustrations/login.svg'

export default function LoginContainer() {
    const [email, setEmail] = useState(''),
        [password, setPassword] = useState(''),
        [loading, setLoading] = useState(false),
        { signIn } = useAuth(),
        handleSubmit = () => {
            setLoading(true)
            signIn({ email, password })
        }

    return (
        <All>
            <div className='loginContainer' id='loginContainer'>
                <h1>Login</h1>
                <label>Seu email</label>
                <input type='text' onChange={e => setEmail(e.target.value)} />
                <label>Sua senha</label>
                <input type='password' onChange={e => setPassword(e.target.value)} />
                <div className='btn'>
                    <button type='submit' className='btn' onClick={handleSubmit} disabled={!(!!password && !!email)}>
                        {loading ? <CircularProgress size={12} style={{ color: '#fff' }} /> : 'Entrar'}
                    </button>
                    <aside>
                        <Link className='notRegistered' to='/register'>
                            Não é registrado ainda? <b>Registre-se</b>
                        </Link>
                        <Link className='forgotPassword' to='/forgot-password'>
                            <b>Esqueci minha senha</b>
                        </Link>
                    </aside>
                </div>
            </div>
            <div className='imgContainer'>
                {/* <span>Image</span> */}
                <img src={LoginIlustration}/>
            </div>
        </All>
    )
}
