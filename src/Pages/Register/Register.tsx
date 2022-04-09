import React, { useState } from 'react'
import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'
import * as GiIcons from 'react-icons/gi'
import {RegisterContainer} from './style'
import Steps from '@/Components/Steps/Steps';

export default function Register() {
    const [activeStep, setActiveStep] = useState(0),
        steps = [
            {
                title: 'Suas informações de cadastro',
                description: 'Preencha as informações de cadastro',
                icon: <AiIcons.AiOutlineUser />,
                content: (
                    <div>
                        <p>aaa</p>
                    </div>
                )
            },
            {
                title: 'Algumas perguntinhas',
                description: 'Preencha as informações de cadastro',
                icon: <RiIcons.RiQuestionAnswerLine />,
                content: (
                    <div>
                        <p>bbb</p>
                    </div>
                )
            },
            {
                title: 'Quase lá...',
                description: 'Preencha as informações de cadastro',
                icon: <GiIcons.GiFinishLine />,
                content: (
                    <div>
                        <p>ccc</p>
                    </div>
                )
            },
        ],
        handleNextStep = () => {
            setActiveStep(prevActiveStep => prevActiveStep + 1);
        },
        handlePrevStep = () => {
            setActiveStep(prevActiveStep => prevActiveStep - 1);
        },
        handleSelectStep = (step_id: number) => {
            setActiveStep(step_id);
        };

    let step_prop = {
        steps:steps,
        step:activeStep,
        setStep:setActiveStep,
        handleNextStep:handleNextStep,
        handlePrevStep:handlePrevStep,
        handleSelectStep:handleSelectStep
    }

    return (
        <RegisterContainer>
            <Steps {...step_prop}/>
        </RegisterContainer>
    )
}
