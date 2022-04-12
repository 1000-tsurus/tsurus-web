import { api } from '@/Services/api'
import { CircularProgress } from '@mui/material'
import React, { useState } from 'react'
import * as MdIcons from 'react-icons/md'
import { toast } from 'react-toastify'
import { StyledModal } from './style'

type Props = {
    isOpen: boolean
    onClose: () => void
}

export default function CreateSkillModal({ 
    isOpen,
    onClose,
}: Props) {
    const [name, setName] = useState(''),
        [isLoading, setIsLoading] = useState(false),
        handleSubmit = () => {
            setIsLoading(true)
            api.post('/skills/store', {
                name,
            }).then(() => {
                toast.success('Habilidade criada', {theme: 'colored'})
                onClose()
            }).catch(() => {
                toast.error('Erro ao criar habilidade', {theme: 'colored'})
            }).finally(() => {
                setIsLoading(false)
            })
        }

    return (
        <StyledModal open={isOpen}>
            <div className='card'>
                <header>
                    <h2>Criação de habilidades</h2>
                    <MdIcons.MdOutlineClose onClick={onClose}/>
                </header>
                <section>
                    <label>Qual o nome da sua habilidade?</label>
                    <input 
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </section>
                <footer>
                    <button 
                        className='cancel'
                        onClick={onClose}
                    >Cancelar</button>
                    <button 
                        onClick={handleSubmit}
                        className='confirm'
                        disabled={!name || isLoading}
                    >
                        {isLoading ?
                            <CircularProgress
                                style={{color: '#fff'}}
                                size={24}
                                thickness={6}
                            /> 
                                : 'Criar'
                        }
                    </button>
                </footer>
            </div>
        </StyledModal>
    )
}
