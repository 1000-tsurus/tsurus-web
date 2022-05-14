import React, { useState } from 'react'
import ForgotPasswordContainer from '../../Components/ForgotPasswordContainer/ForgotPasswordContainer'

export default function ForgotPassword() {
    const [step, setStep] = useState(0)
    switch (step) {
        case 0:
            return <ForgotPasswordContainer />

        case 1:
            return <div>1</div>

        case 2:
            return <div>2</div>

        case 3:
            return <div>3</div>
    }

    return <></>
}
