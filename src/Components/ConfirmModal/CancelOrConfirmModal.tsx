import { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import { ConfirmModal, ConfirmModalButtons } from './ConfirmModal'

export type CancelOrConfirmModalProps = {
    title: string
    subtitle: string
    input_icon: string
    type: 'warning' | 'error' | 'success' | 'info'
    onConfirm: () => void
    onCancel: () => void
    confirm_text: string
    cancel_text: string
    is_open: boolean
    is_loading?: boolean
}

export function CancelOrConfirmModal({
    title,
    subtitle,
    is_open = false,
    input_icon,
    onConfirm,
    onCancel,
    confirm_text,
    cancel_text,
    type,
    is_loading
}: CancelOrConfirmModalProps) {
    const theme = useTheme()
    let color: string

    switch (type) {
        case 'warning':
            color = theme.colors.warning
            break
        case 'error':
            color = theme.colors.danger
            break
        case 'success':
            color = theme.colors.success
            break
        case 'info':
            color = theme.colors.destaque
            break
    }

    const icon = {
            name: input_icon,
            color: color
        },
        [buttons, setButtons] = useState<ConfirmModalButtons[]>([
            {
                text: 'Cancelar',
                onClick: onCancel,
                type: 'outline',
                fillColor: theme.colors.text,
                textColor: theme.colors.text
            },
            {
                text: confirm_text,
                onClick: onConfirm,
                type: 'filled',
                fillColor: theme.colors?.success,
                textColor: '#fff'
            }
        ])

    useEffect(() => {
        setButtons([
            {
                text: cancel_text,
                onClick: onCancel,
                type: 'outline',
                fillColor: theme.colors.text,
                textColor: theme.colors.text
            },
            {
                text: confirm_text,
                onClick: onConfirm,
                type: 'filled',
                fillColor: color,
                textColor: '#fff',
                is_loading: is_loading
            }
        ])
    }, [is_loading, color, confirm_text, onConfirm, onCancel, theme])

    return (
        <ConfirmModal title={title} subtitle={subtitle} is_open={is_open} icon={icon} buttons={buttons}></ConfirmModal>
    )
}
