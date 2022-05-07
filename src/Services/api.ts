import axios from 'axios'
import { toast } from 'react-toastify'

export const api = axios.create({
    baseURL: 'http://10.0.5.33:3333'
})

export const configApi = () => {
    const token = JSON.parse(localStorage.getItem('@Auth:token') || '')

    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

const responseHandler = (response: any) => {
    return response
}

const errorHandler = (error: any) => {
    if (error.message.includes('401')) {
        toast.error('Não autorizado', { theme: 'colored' })
    }

    return Promise.reject(error)
}

// Intercerpetor de requisições
api.interceptors.request.use(
    config => {
        const token = localStorage.getItem('@Auth:token')

        if (token !== null) {
            config.headers = {
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        }

        // Do something before request is sent
        return config
    },
    error => Promise.reject(error)
)

api.interceptors.response.use(responseHandler, errorHandler)
