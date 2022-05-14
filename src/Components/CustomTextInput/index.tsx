import { cpf, phone } from '@/Utils/formatters'
import { forwardRef, ForwardRefRenderFunction, HTMLProps, useCallback } from 'react'
import { FieldErrors } from 'react-hook-form'
import { ContainerTextInput } from './styled'

export type TextInputProps = HTMLProps<HTMLInputElement> & {
    is_optional?: boolean
    label: string
    validator?: (value: string) => string | boolean
    errors?: FieldErrors<any>
    mask?: 'cpf' | 'cnpj' | 'phone' | 'cep'
    max_length?: number
}

const TextInput: ForwardRefRenderFunction<HTMLInputElement, TextInputProps> = (
    { is_optional, label, validator, onChange, onBlur, errors, mask, value, max_length, ...rest },
    ref
) => {
    console.log(is_optional, label, validator, onChange, onBlur, errors, mask, value, max_length, rest)
    const handleKeyUp = useCallback(
            (e: React.ChangeEvent<HTMLInputElement>) => {
                if (mask === 'cpf') {
                    cpf(e)
                }
                if (mask === 'phone') {
                    phone(e)
                }
            },
            [mask]
        ),
        handleOnChange = (e: any) => {
            if (mask) handleKeyUp(e)
            if (onChange) onChange(e)
        }

    return (
        <ContainerTextInput>
            <label className='the-label'>
                {label}
                {is_optional && <span className='optional'>Opcional</span>}
            </label>

            <input
                {...rest}
                ref={ref}
                value={value}
                className='the-input'
                onChange={event => handleOnChange(event)}
                onBlur={onBlur}
                autoComplete='off'
                maxLength={max_length || 255}
            />

            {errors && (
                <div className='container-error'>
                    <i className='icon-alert'></i>

                    <span className='error-msg'>{errors?.message}</span>
                </div>
            )}
        </ContainerTextInput>
    )
}

export default forwardRef(TextInput)
