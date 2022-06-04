import React, { useContext, useEffect, useState } from 'react'
import InputMask from 'react-input-mask'
import { yupResolver } from '@hookform/resolvers/yup'
import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'
import * as GiIcons from 'react-icons/gi'
import * as yup from 'yup'
import Steps from '@/Components/Steps/Steps'
import { FormProvider, useForm } from 'react-hook-form'
import { RegisterContainer, StepContainer } from './style'
import { Checkbox, Input, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, Skeleton } from '@mui/material'
import { api } from '@/Services/api'
import { ThemeContext } from '@/providers'
import CreateSkillModal from '@/Components/CreateSkillModal/CreateSkillModal'
import * as FiIcons from 'react-icons/fi'
import { toast } from 'react-toastify'
import TextInput from '@/Components/CustomTextInput'
import CustomCheckbox from '@/Components/CustomCheckBox'
import { useLocalStorage } from '@/Hooks/useLocalStorage'
import { DateTime } from 'ts-luxon'
import { DateInput } from '@/Components/CustomDateInput'
import { useNavigate } from 'react-router-dom'
import { MemoizedOnlyConfirmModal, OnlyConfirmModalProps } from '@/Components/ConfirmModal/OnlyConfirmModal'
import { CancelOrConfirmModal, CancelOrConfirmModalProps } from '@/Components/ConfirmModal/CancelOrConfirmModal'

const defaultValues: Partial<FormValues> = {
    name: '',
    password: '',
    email: '',
    phone: '',
    is_wpp: false,
    is_public: false,
    occupation: '',
    occupation_date: null,
    skills: [],
    trajectory: '',
    to_help: '',
    icon: null
}

export type FormValues = {
    name: string
    password: string
    email: string
    phone: string
    is_wpp: boolean
    is_public: boolean
    occupation: string
    occupation_date: string | null
    skills: {
        name: string
        id: number
    }[]
    trajectory: string
    to_help: string
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
        is_public: yup.boolean().required('Campo obrigatório')
    }),
    // Step 2
    yup.object({
        occupation: yup.string().required('Campo obrigatório'),
        occupation_date: yup
            .date()
            .required('Campo obrigatório')
            .typeError('Data inválida')
            .max(DateTime.local().toISODate(), 'Não pode ser menor que a data atual'),
        skills: yup
            .array()
            .of(
                yup.object({
                    name: yup.string(),
                    id: yup.number()
                })
            )
            .max(5, 'Máximo de 5 habilidades')
            .min(1, 'Selecione pelo menos uma habilidade')
            .required('Campo obrigatório'),
        trajectory: yup.string().required('Campo obrigatório')
    }),
    // Step 3
    yup.object({
        to_help: yup.string().required('Campo obrigatório'),
        icon_url: yup.mixed()
    })
]

export const Register = () => {
    const [activeStep, setActiveStep] = useState(0),
        [skills, setSkills] = useState<
            | {
                  id: number
                  skill_name: string
                  selected?: boolean
                  created_at: string
                  updated_at: string
              }[]
            | undefined
        >(),
        [isLoadingSkill, setIsLoadingSkill] = useState(false),
        [isLoading, setIsLoading] = useState(false),
        [isCreateOpen, setIsCreateOpen] = useState(false),
        [phone_types, set_phone_types] = useState<{
            is_wpp: boolean
            is_public: boolean
        }>({
            is_wpp: false,
            is_public: false
        }),
        { selectedTheme } = useContext(ThemeContext),
        currentValidationSchema = validationSchema[activeStep],
        [storagedForms, setStoragedForms] = useLocalStorage<any[]>('mentorRegister', []),
        [onlyConfirmModal, setOnlyConfirmModal] = useState<OnlyConfirmModalProps>({
            is_open: false,
            title: '',
            subtitle: '',
            input_icon: '',
            confirm_text: '',
            onConfirm: () => {},
            type: 'warning'
        }),
        [cancelOrConfirmModal, setCancelOrConfirmModal] = useState<CancelOrConfirmModalProps>({
            is_open: false,
            title: '',
            subtitle: '',
            input_icon: '',
            confirm_text: '',
            cancel_text: '',
            onCancel: () => {},
            onConfirm: () => {},
            type: 'warning'
        }),
        MenuProps = {
            PaperProps: {
                style: {
                    maxHeight: 40 * 4.5 + 20,
                    width: 250
                }
            }
        },
        methods = useForm<FormValues>({
            shouldUnregister: false,
            defaultValues,
            resolver: yupResolver(currentValidationSchema),
            mode: 'all'
        }),
        {
            reset,
            getValues,
            trigger,
            register,
            formState: { errors },
            setValue,
            watch
        } = methods,
        navigator = useNavigate(),
        handleNextStep = async () => {
            const isStepValid = await trigger()
            let values = getValues()
            console.log('🚀 ~ file: Register.tsx ~ line 140 ~ handleNextStep= ~ values', values)
            if (values && isStepValid) {
                setStoragedForms([
                    {
                        ...values
                    }
                ])
                setActiveStep(prevActiveStep => prevActiveStep + 1)
            }
        },
        handlePrevStep = () => {
            const formValues = getValues()

            setActiveStep(prevActiveStep => prevActiveStep - 1)

            Object.values(formValues).forEach(value => {
                if (value && value.length) {
                    setStoragedForms([{ ...formValues }])
                }
            })
        },
        handleSelectStep = (step_id: number) => {
            setActiveStep(step_id)
        },
        onSubmit = () => {
            setIsLoading(true)
            let values = getValues()
            values.phone = values.phone.replace('(', '').replace(')', '').replace('-', '')
            let final_data = {
                full_name: values.name,
                password: values.password,
                icon_url: 'http://cdn.onlinewebfonts.com/svg/img_173956.png',
                email: values.email,
                trajectory_text: values.trajectory,
                to_help_text: values.to_help,
                role: values.occupation,
                employer: values.occupation,
                skills: values.skills.map(skill => skill.id),
                entry_date_time: values.occupation_date,
                phone: {
                    ddd: values.phone.split(' ')[0],
                    phone_number: values.phone.split(' ')[1],
                    country_code: '55',
                    is_wpp: phone_types.is_wpp,
                    is_public: phone_types.is_public
                }
            }
            api.post('user/store', final_data)
                .then(response => {
                    console.log(response.data)
                    api.post('auth/login', {
                        email: values.email,
                        password: values.password
                    })
                        .then(res => {
                            handleClearForms()
                            for (let key in res.data) {
                                localStorage.setItem(
                                    `Tsurus@${key}`,
                                    typeof res.data[key] === 'object' ? JSON.stringify(res.data[key]) : res.data[key]
                                )
                            }
                            let modal_props: OnlyConfirmModalProps = {
                                ...onlyConfirmModal,
                                title: 'Cadastro realizado com sucesso!',
                                subtitle: 'Você foi cadastrado e ja está autenticado!',
                                input_icon: 'icon-user-add',
                                confirm_text: 'OK',
                                type: 'info',
                                is_open: true
                            }
                            setOnlyConfirmModal({
                                ...modal_props,
                                onConfirm: () => {
                                    setOnlyConfirmModal({
                                        ...modal_props,
                                        is_open: false
                                    })
                                    navigator('/home', { replace: true })
                                }
                            })
                        })
                        .catch(err => {
                            toast.error('Erro ao logar no usuário criado', { theme: 'colored' })
                            console.log(err)
                        })
                        .finally(() => {
                            setIsLoading(false)
                        })
                })
                .catch(err => {
                    console.log(err)
                    toast.error('Erro ao se cadastrar :/', { theme: 'colored' })
                    setIsLoading(false)
                })
        },
        handleClearForms = () => {
            setCancelOrConfirmModal({
                ...cancelOrConfirmModal,
                is_open: true,
                title: 'Deseja limpar todos os dados?',
                subtitle: '',
                input_icon: 'icon-delete',
                confirm_text: 'Sim',
                cancel_text: 'Não',
                onCancel: () => {
                    setCancelOrConfirmModal({
                        ...cancelOrConfirmModal,
                        is_open: false
                    })
                },
                onConfirm: () => {
                    set_phone_types({
                        is_wpp: false,
                        is_public: false
                    })
                    setStoragedForms([])
                    reset()
                    setActiveStep(0)
                    setCancelOrConfirmModal({
                        ...cancelOrConfirmModal,
                        is_open: false
                    })
                }
            })
        }

    useEffect(() => {
        setIsLoadingSkill(true)
        api.get('skills/index')
            .then(response => {
                // adiciona a propriedade selected aos objetos
                const skill_select = response.data.map((skill: any) => {
                    return {
                        ...skill,
                        selected: false
                    }
                })
                skill_select.map((skill: { skill_name: string; selected: boolean }) => {
                    if (
                        getValues()
                            .skills.map(skill => skill.name)
                            .includes(skill.skill_name)
                    ) {
                        skill.selected = true
                    }
                })
                setSkills(skill_select)
            })
            .finally(() => {
                setIsLoadingSkill(false)
            })
    }, [isCreateOpen])

    useEffect(() => {
        if (skills) {
            if (skills.filter(skill => skill.selected).length > 5) {
                toast.error('Você só pode selecionar 5 habilidades', { theme: 'colored' })
                let temp_skills = skills.filter(skill => skill.selected)
                for (let i = 0; i < temp_skills.length - 5; i++) {
                    if (skills[i].selected) {
                        skills[i].selected = false
                        break
                    }
                }
                let new_values = temp_skills
                    .filter(skill => skill.selected)
                    .map(skill => {
                        return {
                            id: skill.id,
                            name: skill.skill_name
                        }
                    })
                setValue('skills', [...new_values])
                setSkills(temp_skills)
            }
        }
    }, [skills])

    useEffect(() => {
        // Verificando se já possui dados salvos no localStorage
        // caso existir será preenchido no formulário
        let [values] = storagedForms
        if (values) {
            Object.keys(values).forEach((key: any) => {
                setValue(key, values[key])
            })

            set_phone_types({
                is_wpp: values.is_wpp,
                is_public: values.is_public
            })
        }

        values = getValues()
        const isValid = currentValidationSchema.isValidSync(values)
        if (isValid) {
            steps[activeStep].isValid = true
        }
    }, [activeStep, storagedForms])

    useEffect(() => {
        setValue('is_wpp', phone_types.is_wpp)
        setValue('is_public', phone_types.is_public)
    }, [phone_types])

    useEffect(() => {
        setStoragedForms([
            {
                ...getValues()
            }
        ])
    }, [watch('to_help')])

    useEffect(() => {
        if (localStorage.getItem('Tsurus@user')) {
            setCancelOrConfirmModal({
                ...cancelOrConfirmModal,
                is_open: true,
                title: 'Você já está logado',
                confirm_text: 'Deslogar e criar outro usuãrio',
                cancel_text: 'Cancelar',
                onCancel: () => {
                    navigator('/home', { replace: true })
                },
                onConfirm: () => {
                    localStorage.clear()
                    handleClearForms()
                    setCancelOrConfirmModal({
                        ...cancelOrConfirmModal,
                        is_open: false
                    })
                },
                type: 'error',
                input_icon: 'icon-user-add'
            })
        }
    }, [])

    const steps = [
        {
            title: 'Suas informações de cadastro',
            description: 'Preencha as informações de cadastro',
            icon: <AiIcons.AiOutlineUser />,
            id: 0,
            isValid: false,
            content: (
                <StepContainer>
                    <section className='user_infos'>
                        <aside className='first_left'>
                            <div className='user_infos_row'>
                                <TextInput {...register('name')} label='Nome' name='name' className='the_input' />
                                {errors.name && (
                                    <div className='row_error'>
                                        <FiIcons.FiAlertCircle />
                                        <span className='error'>{errors.name.message}</span>
                                    </div>
                                )}
                            </div>
                            <div className='user_infos_row'>
                                <TextInput
                                    label='Senha'
                                    className='the_input'
                                    type='password'
                                    {...register('password')}
                                />
                                {errors.password && (
                                    <div className='row_error'>
                                        <FiIcons.FiAlertCircle />
                                        <span className='error'>{errors.password.message}</span>
                                    </div>
                                )}
                            </div>
                        </aside>
                        <aside className='first_right'>
                            <div className='user_infos_row'>
                                <TextInput label='Email' className='the_input' type='email' {...register('email')} />
                                {errors.email && (
                                    <div className='row_error'>
                                        <FiIcons.FiAlertCircle />
                                        <span className='error'>{errors.email.message}</span>
                                    </div>
                                )}
                            </div>
                            <div className='phone_box'>
                                <div className='user_infos_row'>
                                    <TextInput
                                        label='Número'
                                        className='the_input'
                                        mask='phone'
                                        {...register('phone')}
                                    />
                                    {errors.phone && (
                                        <div className='row_error'>
                                            <FiIcons.FiAlertCircle />
                                            <span className='error'>{errors.phone.message}</span>
                                        </div>
                                    )}
                                </div>
                                <div className='phone_type_box'>
                                    <div className='check_row'>
                                        <CustomCheckbox
                                            checked={phone_types.is_wpp}
                                            onChange={() =>
                                                set_phone_types({
                                                    ...phone_types,
                                                    is_wpp: !phone_types.is_wpp
                                                })
                                            }
                                            ref={register}
                                        />
                                        <span>Este número é WhatsApp</span>
                                    </div>
                                    <div className='check_row'>
                                        <CustomCheckbox
                                            checked={phone_types.is_public}
                                            onChange={() =>
                                                set_phone_types({
                                                    ...phone_types,
                                                    is_public: !phone_types.is_public
                                                })
                                            }
                                            ref={register}
                                        />
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
            id: 1,
            isValid: false,
            content: (
                <StepContainer>
                    <section className='life_infos'>
                        <aside className='sec_left'>
                            <div className='occ_row'>
                                <TextInput
                                    label='Qual sua ocupação (cargo) atualmente?'
                                    className='the_input'
                                    id='occupation'
                                    type='text'
                                    {...register('occupation')}
                                />
                                {errors.occupation && (
                                    <div className='row_error'>
                                        <FiIcons.FiAlertCircle />
                                        <span className='error'>{errors.occupation.message}</span>
                                    </div>
                                )}
                            </div>
                            <div className='occ_row'>
                                <label htmlFor='name'>Quais suas principais habilidades?</label>
                                {!isLoadingSkill && skills ? (
                                    <>
                                        <div className='row'>
                                            <Select
                                                label='Habilidades'
                                                labelId='demo-multiple-checkbox-label'
                                                id='demo-multiple-checkbox'
                                                multiple
                                                value={skills}
                                                onChange={e => {
                                                    let selected = skills.map(skill => {
                                                        return {
                                                            ...skill,
                                                            selected: !skill.selected
                                                                ? !!(
                                                                      e.target.value[e.target.value.length - 1] ===
                                                                      skill.skill_name
                                                                  )
                                                                : !(
                                                                      e.target.value[e.target.value.length - 1] ===
                                                                          skill.skill_name && skill.selected
                                                                  )
                                                        }
                                                    })
                                                    setSkills(selected)
                                                    selected
                                                        .filter(skill => skill.selected)
                                                        .map(skill => {
                                                            skill.skill_name, skill.id
                                                        })
                                                    // adiciona novo valor no setValue
                                                    let new_values = selected
                                                        .filter(skill => skill.selected)
                                                        .map(skill => {
                                                            return {
                                                                id: skill.id,
                                                                name: skill.skill_name
                                                            }
                                                        })
                                                    setValue('skills', [...new_values])
                                                }}
                                                input={
                                                    <Input
                                                        style={{
                                                            color: '#000',
                                                            backgroundColor:
                                                                selectedTheme.title === 'dark' ? '#000' : '#fff'
                                                        }}
                                                    />
                                                }
                                                renderValue={selected =>
                                                    skills
                                                        .filter(skill => skill.selected)
                                                        .map(skill => skill.skill_name)
                                                        .join(', ')
                                                }
                                                MenuProps={MenuProps}
                                                style={{
                                                    borderRadius: '5px',
                                                    color: '#000',
                                                    backgroundColor: '#fff',
                                                    padding: '0 1rem',
                                                    width: '75%',
                                                    height: '40px'
                                                }}
                                            >
                                                {skills.map(skill => (
                                                    <MenuItem
                                                        key={skill.skill_name}
                                                        value={skill.skill_name}
                                                        style={{ color: '#000' }}
                                                    >
                                                        <Checkbox checked={skill.selected} />
                                                        <ListItemText primary={skill.skill_name} />
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                            <button
                                                className='add_skill_button'
                                                onClick={() => {
                                                    setIsCreateOpen(true)
                                                }}
                                            >
                                                Criar habilidade
                                            </button>
                                        </div>
                                        <CreateSkillModal
                                            onClose={() => {
                                                setIsCreateOpen(false)
                                            }}
                                            isOpen={isCreateOpen}
                                        />
                                        {(errors.skills || !getValues().skills) && (
                                            <div className='row_error'>
                                                <FiIcons.FiAlertCircle />
                                                <span className='error'>É necessário ter ao menos uma habilidade</span>
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Skeleton width={'80%'} height={40} animation='wave' variant='text' />
                                )}
                            </div>
                        </aside>
                        <aside className='sec_right'>
                            <div className='date_row'>
                                <label htmlFor='name'>Desde quando esta neste cargo?</label>
                                <DateInput
                                    className='the_input date'
                                    type='date'
                                    max={DateTime.local().toFormat('yyyy-MM-dd')}
                                    def_value={getValues().occupation_date || ''}
                                    handle_value_change={e => {
                                        setValue('occupation_date', !!e ? e : null)
                                    }}
                                    {...register('occupation_date')}
                                />
                                {errors.occupation_date && (
                                    <div className='row_error'>
                                        <FiIcons.FiAlertCircle />
                                        <span className='error'>{errors.occupation_date.message}</span>
                                    </div>
                                )}
                            </div>
                            <div className='occ_row'>
                                <label htmlFor='name'>Qual sua trajetória profissional?</label>
                                <textarea {...register('trajectory')}></textarea>
                                {errors.trajectory && (
                                    <div className='row_error'>
                                        <FiIcons.FiAlertCircle />
                                        <span className='error'>{errors.trajectory.message}</span>
                                    </div>
                                )}
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
            id: 2,
            /*
                to_help
                icon_url
            */
            isValid: false,
            content: (
                <StepContainer>
                    <section className='final_infos'>
                        <aside className='finish_left'>
                            <h1>Conta pra gente...</h1>
                            <p>
                                Como <strong>você</strong> pode ajudar outros <strong>MEIs</strong> da cidade?
                            </p>
                        </aside>
                        <aside className='finish_right'>
                            <textarea {...register('to_help')}></textarea>
                            {errors.to_help && (
                                <div className='row_error'>
                                    <FiIcons.FiAlertCircle />
                                    <span className='error'>{errors.to_help.message}</span>
                                </div>
                            )}
                        </aside>
                    </section>
                </StepContainer>
            )
        }
    ]

    let step_prop = {
        steps,
        step: activeStep,
        setStep: setActiveStep,
        onSubmit,
        handleClearForms,
        handleNextStep,
        handlePrevStep,
        handleSelectStep,
        isLoading
    }

    return (
        <RegisterContainer>
            <Steps {...step_prop} />
            <MemoizedOnlyConfirmModal {...onlyConfirmModal}></MemoizedOnlyConfirmModal>
            <CancelOrConfirmModal {...cancelOrConfirmModal}></CancelOrConfirmModal>
        </RegisterContainer>
    )
}
