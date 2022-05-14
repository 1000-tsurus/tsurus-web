import React, { useState } from 'react'
import { All } from './style'

export default function ForgotPassword({ onSubmit }: { onSubmit: () => void }) {
    return (
        <All>
            <div className='forgotContainer'>
                <h1>Esqueceu sua senha?</h1>
                <label>Informe um e-mail:</label>
                <input type='text' />
                <div className='btn'>
                    <button type='submit' onClick={onSubmit} className='btn'>
                        Enviar
                    </button>
                </div>
            </div>
            <div className='imgContainer' />
        </All>
    )
}
