import { api } from '@/Services/api'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import ForgotPasswordContainer from '../../Components/ForgotPasswordContainer/ForgotPasswordContainer'
import ReactCodeInput from '../../Components/ForgotPasswordContainer/ReactCodeInput/ReactCodeInput'

export default function ForgotPassword() {
    const [step, setStep] = useState(0)
    const [email, setEmail] = useState<string>()

    const handleSubmit = () => {
        api.post('auth/create-code', {
            email
        })
            .then(({ data }) => {
                setStep(1)
                toast.success(data, { theme: 'colored' })
            })
            .catch(err => {
                toast.error(err, { theme: 'colored' })
            })
    }

    switch (step) {
        case 0:
            return <ForgotPasswordContainer onSubmit={handleSubmit} />

        case 1:
            return <ReactCodeInput />

        case 2:
            return <div>2</div>

        case 3:
            return <div>3</div>
    }

    return <></>
}
