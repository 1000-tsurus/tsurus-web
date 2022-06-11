import { CircularProgress, Modal } from '@mui/material'
import { AnimatePresence, Variants } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import { ContainerConfirmButton } from './styles'

const variants: Variants = {
    closed: {
        opacity: 0,
        transition: {
            duration: 0.2,
            ease: 'easeInOut'
        }
    },
    open: {
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: 'easeInOut'
        }
    }
}

export type ConfirmModalButtons = {
    text: string
    onClick: () => void
    type: 'outline' | 'filled'
    fillColor?: string
    textColor?: string
    is_loading?: boolean
    loading_color?: string
}

export type ConfirmModalProps = {
    is_open: boolean
    title: string
    subtitle: string
    icon: {
        name: string
        color: string
    }
    buttons: Array<ConfirmModalButtons>
}

export function ConfirmModal({ title, subtitle, icon, buttons, is_open }: ConfirmModalProps) {
    const [is_open_, set_is_open] = useState(is_open),
        theme = useTheme()

    useEffect(() => {
        set_is_open(is_open)
    }, [is_open])

    return (
        <AnimatePresence>
            {is_open_ && (
                <Modal open={is_open_}>
                    <ContainerConfirmButton variants={variants} initial='closed' animate='open' exit='closed'>
                        <div className='icon-container'>
                            <i className={icon.name + ' the-icon'} style={{ color: icon.color }}></i>
                        </div>
                        <div className='texts'>
                            <div>
                                <span className='title'>{title}</span>
                            </div>
                            <div>
                                <span className='subtitle'>{subtitle}</span>
                            </div>
                        </div>
                        <div className={(buttons.length === 1 ? 'single ' : '') + 'buttons'}>
                            {buttons.map((button, index) => (
                                <div key={'ConfirmModal' + index} className='btn-container'>
                                    <button
                                        className={'the-button ' + (button.is_loading ? 'loading' : '')}
                                        onClick={button.onClick}
                                        style={{
                                            [button.type === 'filled' ? 'background' : 'borderColor']: button.fillColor,
                                            color: button.textColor,
                                            ...(button.type === 'outline' ? { backgroundColor: 'transparent' } : {}),
                                            ...(button.type === 'outline' && theme.title === 'dark'
                                                ? { color: '#fff' }
                                                : {})
                                        }}
                                    >
                                        {button.is_loading ? (
                                            <span>
                                                <CircularProgress
                                                    style={{ color: button.loading_color || '#FFFFFF' }}
                                                    className='spinner'
                                                    size={20}
                                                    thickness={7}
                                                ></CircularProgress>
                                            </span>
                                        ) : (
                                            button.text
                                        )}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </ContainerConfirmButton>
                </Modal>
            )}
        </AnimatePresence>
    )
}
