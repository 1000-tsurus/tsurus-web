import React, { useState } from 'react'
import { All } from './style'

export default function ForgotPassword({ onSubmit }: { onSubmit: () => void }) {
    const [email, setEmail] = useState<string>()
    return (
        <All>
            <div className='forgotContainer'>
                <h1>Esqueceu sua senha?</h1>
                <label>Informe um e-mail:</label>
                <input type='text' onChange={e => setEmail(e.target.value)} value={email} />
                <div className='btn'>
                    <button type='submit' onClick={onSubmit} className='btn' disabled={!email}>
                        Enviar
                    </button>
                </div>
            </div>
            <div className='imgContainer' />
        </All>
    )
}
