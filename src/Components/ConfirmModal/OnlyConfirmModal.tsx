import { createContext, memo, useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import { ConfirmModal, ConfirmModalButtons } from './ConfirmModal'

export type OnlyConfirmModalProps = {
    title: string
    subtitle: string
    input_icon: string
    type: 'warning' | 'error' | 'success' | 'info'
    onConfirm: () => void
    confirm_text: string
    is_open: boolean
    is_loading?: boolean
}

export const ConfirmContext: any = createContext([])

export function OnlyConfirmModal({
    title,
    subtitle,
    is_open,
    input_icon,
    onConfirm,
    confirm_text,
    type,
    is_loading
}: OnlyConfirmModalProps) {
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
                text: confirm_text,
                onClick: onConfirm,
                type: 'filled',
                fillColor: color,
                textColor: '#fff'
            }
        ])
    }, [is_open, color, confirm_text, onConfirm, is_loading])

    return (
        <ConfirmContext.Provider value={buttons}>
            <ConfirmModal
                title={title}
                subtitle={subtitle}
                is_open={is_open}
                icon={icon}
                buttons={buttons}
            ></ConfirmModal>
        </ConfirmContext.Provider>
    )
}
export const MemoizedOnlyConfirmModal = memo(OnlyConfirmModal, (prevProps, nextProps) => {
    return prevProps.is_open === nextProps.is_open && (!!prevProps.title || !!prevProps.subtitle)
})
