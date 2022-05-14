export const onlyNumbersAndLetters = (value: any) => {
    if (value) {
        return value.replace(/[^a-zA-Z0-9]/g, '')
    }
}

/**
 * Mascara de CPF para input
 */
export const cpf = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.currentTarget.maxLength = 14
    let value = e.currentTarget.value

    if (!value.match(/^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/)) {
        value = value.replace(/\D/g, '')
        value = value.replace(/(\d{3})(\d)/, '$1.$2')
        value = value.replace(/(\d{3})(\d)/, '$1.$2')
        value = value.replace(/(\d{3})(\d{2})$/, '$1-$2')
        e.currentTarget.value = value
    }
    return e
}

/**
 * Formata uma string para CPF
 * @example
 * formatCpf('12345678901') // => 123.456.789-01
 */
export const cpf_formatter = (value: string) => {
    if (!value.match(/^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/)) {
        value = value.replace(/\D/g, '')
        value = value.replace(/(\d{3})(\d)/, '$1.$2')
        value = value.replace(/(\d{3})(\d)/, '$1.$2')
        value = value.replace(/(\d{3})(\d{2})$/, '$1-$2')
    }
    return value
}

/**
 * Mascara de celular para input
 */
export const phone = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.currentTarget.maxLength = 15
    let value = e.currentTarget.value

    if (!value.match(/^(\d{2}) (\d{4})-(\d{4})$/) && value.length <= 14) {
        value = value.replace(/\D/g, '')
        value = value.replace(/(\d{2})(\d)/, '($1) $2')
        value = value.replace(/(\d{4})(\d)/, '$1-$2')
        e.currentTarget.value = value
    } else if (!value.match(/^(\d{2}) (\d{5})-(\d{4})$/)) {
        value = value.replace(/\D/g, '')
        value = value.replace(/(\d{2})(\d)/, '($1) $2')
        value = value.replace(/(\d{5})(\d)/, '$1-$2')
        e.currentTarget.value = value
    }
    return e
}

/**
 * Formata uma string para número de celular
 * @example
 * formatPhone('4399999999') // => (43) 99999-9999
 */
export const phone_formatter = (value: string) => {
    if (!value.match(/^(\d{2}) (\d{4})-(\d{4})$/) && value.length <= 10) {
        value = value.replace(/\D/g, '')
        value = value.replace(/(\d{2})(\d)/, '($1) $2')
        value = value.replace(/(\d{4})(\d)/, '$1-$2')
    } else if (!value.match(/^(\d{2}) (\d{5})-(\d{4})$/)) {
        value = value.replace(/\D/g, '')
        value = value.replace(/(\d{2})(\d)/, '($1) $2')
        value = value.replace(/(\d{5})(\d)/, '$1-$2')
    }
    return value
}

export const formatBytes = (bytes: number, decimals = 2) => {
    if (bytes === 0) return '0 Bytes'

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}
