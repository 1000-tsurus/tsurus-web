import React, { forwardRef, ForwardRefRenderFunction, HTMLProps, useEffect, useState } from 'react'
import { FieldErrors } from 'react-hook-form'
import { DateRow } from './style'

type DateProps = HTMLProps<HTMLInputElement> & {
    def_value?: string
    max?: string | number
    handle_value_change: (date: string) => void
}

export function DateInput({ def_value, min, max, handle_value_change, ...rest }: DateProps) {
    const [date, setDate] = useState(def_value ? def_value : ''),
        handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { value } = e.target

            if (min) {
                if (value < min) {
                    return
                }
            }

            if (max) {
                if (value > max) {
                    return
                }
            }

            setDate(value)
            handle_value_change(value)
        }

    useEffect(() => {
        setDate(def_value ? def_value : '')
    }, [def_value, handle_value_change, min, max])

    return (
        <div style={{ textAlign: 'center' }}>
            {min && max && def_value && date !== def_value ? (
                <label>
                    A data mínima é {min} e a máxima é {max}
                </label>
            ) : null}
            <DateRow hasMax={!!max}>
                <input
                    {...rest}
                    onChange={handleChange}
                    value={date}
                    className='icon-calendar'
                    type='date'
                    min={min}
                    max={max}
                />
            </DateRow>
        </div>
    )
}

type DatePropsRef = HTMLProps<HTMLInputElement> & {
    def_value?: string
    max?: string | number
    required?: boolean
    handle_value_change: (date: string) => void
    errors?: FieldErrors<any>
}

const DateInputRef: ForwardRefRenderFunction<HTMLInputElement, DatePropsRef> = (
    { value, required, handle_value_change, errors, ...rest },
    ref
) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        handle_value_change(value)
    }

    return (
        <div>
            <DateRow>
                <input
                    {...rest}
                    required={required}
                    onChange={handleChange}
                    value={value}
                    className='icon-calendar'
                    type='date'
                    ref={ref}
                />
                {errors && (
                    <div className='container-error'>
                        <i className='icon-alert'></i>

                        <span className='error-msg'>{errors?.message}</span>
                    </div>
                )}
            </DateRow>
        </div>
    )
}

export default forwardRef(DateInputRef)
