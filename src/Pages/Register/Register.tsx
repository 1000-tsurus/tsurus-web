import React, { useState } from 'react'
import InputMask from 'react-input-mask';
import { yupResolver } from '@hookform/resolvers/yup';
import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'
import * as GiIcons from 'react-icons/gi'
import * as yup from 'yup';
import Steps from '@/Components/Steps/Steps';
import { useForm } from 'react-hook-form';
import { useLocalStorage } from '@caldwell619/react-hooks';
import {
    RegisterContainer,
    StepContainer
} from './style'
import { Checkbox } from '@mui/material';

const defaultValues: Partial<FormValues> = {
    name: '',
    password: '',
    email: '',
    phone: '',
    is_wpp: false,
    is_public: false,
    occupation: '',
    occupation_date: '',
    skills: [],
    trajectory: '',
    to_help: '',
    icon: null
}

export type FormValues = {
    name: string,
    password: string,
    email: string,
    phone: string,
    is_wpp: boolean,
    is_public: boolean,
    occupation: string,
    occupation_date: string,
    skills: number[],
    trajectory: string,
    to_help: string,
    icon: any
}

// Validação do formulário
const validationSchema = [
    // Step 1
    yup.object({
        name: yup.string().required('Campo obrigatório'),
        password: yup.string().required('Campo obrigatório').min(8),
        email: yup.string().required('Campo Obrigatório').email('Digite um e-mail válido'),
        phone: yup.string().required('Campo obrigatório').min(11),
        is_wpp: yup.boolean().required('Campo obrigatório'),
        is_public: yup.boolean().required('Campo obrigatório'),
    }),
    // Step 2
    yup.object({
        occupation: yup.string(),
        occupation_date: yup.date(),
        skills: yup.array().of(yup.string()),
        trajectory: yup.string(),
    }),
    // Step 3
    yup.object({
        to_help: yup.string(),
        icon_url: yup.mixed()
    }),
];

export default function Register() {
    const [activeStep, setActiveStep] = useState(0),
        currentValidationSchema = validationSchema[activeStep],
        [storagedForms, setStoragedForms] = useLocalStorage<any[]>('mentorRegister', []),
        methods = useForm<FormValues>({
            shouldUnregister: false,
            defaultValues,
            resolver: yupResolver(currentValidationSchema),
            mode: "all",
        }), {
            reset,
            getValues,
            trigger,
            register,
            formState: { errors },
            setValue,
        } = methods,
        steps = [
            {
                title: 'Suas informações de cadastro',
                description: 'Preencha as informações de cadastro',
                icon: <AiIcons.AiOutlineUser />,
                content: (
                    <StepContainer>
                        <section className='user_infos'>
                            <aside className='first_left'>
                                <div className='user_infos_row'>
                                    <label htmlFor="name">Nome</label>
                                    <input 
                                        className='the_input'
                                        type="text"
                                    />
                                </div>
                                <div className='user_infos_row'>
                                    <label htmlFor="name">Senha</label>
                                    <input 
                                        className='the_input'
                                        type="password"
                                    />
                                </div>
                            </aside>
                            <aside className='first_right'>
                                <div className='user_infos_row'>
                                    <label htmlFor="name">Email</label>
                                    <input 
                                        className='the_input'
                                        type="email"
                                    />
                                </div>
                                <div className='phone_box'>
                                    <div className='user_infos_row'>
                                        <label htmlFor="name">Número</label>
                                        <InputMask
                                            className='the_input'
                                            mask={'+99 (99) 99999-9999'}
                                        />
                                    </div>
                                    <div className='phone_type_box'>
                                        <div className='check_row'>
                                            <Checkbox />
                                            <span>Este número é WhatsApp</span>
                                        </div>
                                        <div className='check_row'>
                                            <Checkbox />
                                            <span>Este número pode ser visualizado por usuários não registrados</span>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </section>
                    </StepContainer>
                )
            },
            {
                title: 'Algumas perguntinhas',
                description: 'Preencha as informações de cadastro',
                icon: <RiIcons.RiQuestionAnswerLine />,
                /*
                    occupation
                    occupation_date
                    skills
                    trajectory
                */
                content: (
                    <StepContainer>
                        <section className='life_infos'>
                            <aside className='sec_left'>
                                <div className='occ_row'>
                                    <label htmlFor="name">Qual sua ocupação (cargo) atualmente?</label>
                                    <input
                                        className='the_input'
                                        type="text"
                                    />

                                </div>
                                <div className='occ_row'>
                                    <label htmlFor="name">Desde quando esta neste cargo?</label>
                                    <input
                                        className='the_input'
                                        type="month"
                                    />
                                </div>
                            </aside>
                            <aside>
                                <div className='occ_row'>
                                    <label htmlFor="name">Quais suas principais habilidades?</label>
                                    <input
                                        className='the_input'
                                        type="month"
                                    />
                                </div>
                                <div className='occ_row'>
                                    <label htmlFor="name">Qual sua trajetória profissional?</label>
                                    <textarea></textarea>
                                </div>
                            </aside>
                        </section>
                    </StepContainer>
                )
            },
            {
                title: 'Quase lá...',
                description: 'Preencha as informações de cadastro',
                icon: <GiIcons.GiFinishLine />,
                /*
                    to_help
                    icon_url
                */
                content: (
                    <StepContainer>
                        <section>
                            <aside className='finish_left'>
                                
                            </aside>
                        </section>
                    </StepContainer>
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
        },
        onSubmit = () => {
            console.log('submit')
        },
        handleClearForms = () => {
            setStoragedForms([]);
            reset();
            setActiveStep(0);
        }

    let step_prop = {
        steps,
        step: activeStep,
        setStep: setActiveStep,
        onSubmit,
        handleClearForms,
        handleNextStep,
        handlePrevStep,
        handleSelectStep
    }

    return (
        <RegisterContainer>
            <Steps {...step_prop}/>
        </RegisterContainer>
    )
}
