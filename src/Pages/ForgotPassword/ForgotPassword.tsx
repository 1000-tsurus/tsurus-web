import React, { useState } from 'react'
import ForgotPasswordContainer from '../../Components/ForgotPasswordContainer/ForgotPasswordContainer'
import ReactCodeInput from '../../Components/ForgotPasswordContainer/ReactCodeInput/ReactCodeInput'

export default function ForgotPassword() {
    const [step, setStep] = useState(0)

    const handleSubmit = () => {
        setStep(1)
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
