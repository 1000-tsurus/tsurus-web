import React, { useContext, useEffect, useState } from 'react'
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
import { Checkbox, Input, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, Skeleton } from '@mui/material';
import { api } from '@/Services/api';
import { ThemeContext } from '@/providers/Theme';
import CreateSkillModal from '@/Components/CreateSkillModal/CreateSkillModal';
import * as FiIcons from 'react-icons/fi';
import { toast } from 'react-toastify';

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
    skills: {
        name: string;
        id: number;
    }[],
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
        skills: yup.array().of(
            yup.object({
                name: yup.string(),
                id: yup.number(),
            })
        ).required('Campo obrigatório'),
        trajectory: yup.string().required('Campo obrigatório'),
    }),
    // Step 3
    yup.object({
        to_help: yup.string().required('Campo obrigatório'),
        icon_url: yup.mixed()
    }),
];

export default function Register() {
    const [activeStep, setActiveStep] = useState(0),
        [skills, setSkills] = useState<{
            id: number,
            skill_name: string,
            selected?: boolean,
            created_at: string,
            updated_at: string
        }[] | undefined>(),
        [isLoadingSkill, setIsLoadingSkill] = useState(false),
        [isCreateOpen, setIsCreateOpen] = useState(false),
        {selectedTheme} = useContext(ThemeContext),
        currentValidationSchema = validationSchema[activeStep],
        [storagedForms, setStoragedForms] = useLocalStorage<any[]>('mentorRegister', []),
        MenuProps = {
            PaperProps: {
                style: {
                    maxHeight: 40 * 4.5 + 20,
                    width: 250,
                },
            },
        },
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
                                        {...register('name')}
                                    />
                                    {errors.name && <div className='row_error'>
                                        <FiIcons.FiAlertCircle/>
                                        <span className='error'>{errors.name.message}</span>
                                    </div>}
                                </div>
                                <div className='user_infos_row'>
                                    <label htmlFor="name">Senha</label>
                                    <input 
                                        className='the_input'
                                        type="password"
                                        {...register('password')}
                                    />
                                    {errors.password && <div className='row_error'>
                                        <FiIcons.FiAlertCircle/>
                                        <span className='error'>{errors.password.message}</span>
                                    </div>}
                                </div>
                            </aside>
                            <aside className='first_right'>
                                <div className='user_infos_row'>
                                    <label htmlFor="name">Email</label>
                                    <input 
                                        className='the_input'
                                        type="email"
                                        {...register('email')}
                                    />
                                    {errors.email && <div className='row_error'>
                                        <FiIcons.FiAlertCircle/>
                                        <span className='error'>{errors.email.message}</span>
                                    </div>}
                                </div>
                                <div className='phone_box'>
                                    <div className='user_infos_row'>
                                        <label htmlFor="name">Número</label>
                                        <InputMask
                                            className='the_input'
                                            mask={'+99 (99) 99999-9999'}
                                            {...register('phone')}
                                        />
                                        {errors.phone && <div className='row_error'>
                                            <FiIcons.FiAlertCircle/>
                                            <span className='error'>{errors.phone.message}</span>
                                        </div>}
                                    </div>
                                    <div className='phone_type_box'>
                                        <div className='check_row'>
                                            <Checkbox {...register('is_wpp')}/>
                                            <span>Este número é WhatsApp</span>
                                        </div>
                                        <div className='check_row'>
                                            <Checkbox {...register('is_public')}/>
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
                content: (
                    <StepContainer>
                        <section className='life_infos'>
                            <aside className='sec_left'>
                                <div className='occ_row'>
                                    <label htmlFor="name">Qual sua ocupação (cargo) atualmente?</label>
                                    <input
                                        value={getValues().occupation}
                                        className='the_input'
                                        type="text"
                                        {...register('occupation')}
                                    />
                                    {errors.occupation && <div className='row_error'>
                                        <FiIcons.FiAlertCircle/>
                                        <span className='error'>{errors.occupation.message}</span>
                                    </div>}
                                </div>
                                <div className='occ_row'>
                                    <label htmlFor="name">Desde quando esta neste cargo?</label>
                                    <input
                                        value={new Date(getValues().occupation_date).toLocaleDateString()}
                                        className='the_input'
                                        type="month"
                                        {...register('occupation_date')}
                                    />
                                    {errors.occupation_date && <div className='row_error'>
                                        <FiIcons.FiAlertCircle/>
                                        <span className='error'>{errors.occupation_date.message}</span>
                                    </div>}
                                </div>
                            </aside>
                            <aside className='sec_right'>
                                <div className='occ_row'>
                                    <label htmlFor="name">Quais suas principais habilidades?</label>
                                    {!isLoadingSkill && skills ? 
                                        <>
                                            <Select
                                                label='Habilidades'
                                                labelId="demo-multiple-checkbox-label"
                                                id="demo-multiple-checkbox"
                                                multiple
                                                value={skills}
                                                onChange={(e) => {
                                                    let selected = skills.map(skill => {
                                                        return {
                                                            ...skill,
                                                            selected: 
                                                               !skill.selected ? !!(
                                                                   e.target.value[e.target.value.length - 1] === skill.skill_name) 
                                                                    : !(e.target.value[e.target.value.length - 1] === skill.skill_name 
                                                                        && skill.selected)
                                                        }
                                                    })
                                                    setSkills(selected)
                                                    selected.filter(skill => skill.selected).map(skill => {skill.skill_name, skill.id})
                                                    // adiciona novo valor no setValue
                                                    let new_values = selected.filter(skill => skill.selected).map(skill => {return {
                                                        id: skill.id,
                                                        name: skill.skill_name
                                                    }})
                                                    setValue('skills', [...new_values])
                                                }}
                                                input={
                                                    <Input
                                                        style={{ 
                                                            color: '#000',
                                                            backgroundColor: selectedTheme.title === 'dark' ? '#000' : '#fff'
                                                        }}
                                                    />}
                                                renderValue={(selected) => skills.filter(skill => skill.selected).map(skill => skill.skill_name).join(', ')}
                                                MenuProps={MenuProps}
                                                style={{ 
                                                    borderRadius: '5px',
                                                    color: '#000',
                                                    backgroundColor: '#fff',
                                                    padding: '0 1rem',
                                                    width: '80%',
                                                    height: '40px',
                                                }}
                                            >
                                                {skills.map((skill) => (
                                                    <MenuItem 
                                                        key={skill.skill_name}
                                                        value={skill.skill_name}
                                                        style={{ color: '#000'}}
                                                    >
                                                        <Checkbox checked={skill.selected} />
                                                        <ListItemText primary={skill.skill_name} />
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                            <button 
                                                className='add_skill_button'
                                                onClick={() => {setIsCreateOpen(true)}}
                                            >Criar nova habilidade</button>
                                            <CreateSkillModal 
                                                onClose={() => {setIsCreateOpen(false)}}
                                                isOpen={isCreateOpen}
                                            />
                                            {errors.skills || !getValues().skills && <div className='row_error'>
                                                <FiIcons.FiAlertCircle/>
                                                <span className='error'>É necessário ter ao menos uma habilidade</span>
                                            </div>}
                                        </>
                                    : <Skeleton 
                                        width={'80%'}
                                        height={40}
                                        animation='wave'
                                        variant='text'
                                    />}
                                </div>
                                <div className='occ_row'>
                                    <label htmlFor="name">Qual sua trajetória profissional?</label>
                                    <textarea
                                        {...register('trajectory')}
                                    ></textarea>
                                    {errors.trajectory && <div className='row_error'>
                                        <FiIcons.FiAlertCircle/>
                                        <span className='error'>{errors.trajectory.message}</span>
                                    </div>}
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
        handleNextStep = async () => {
            const isStepValid = await trigger();
            let values = getValues()
            if(values && isStepValid){
                setStoragedForms([{
                    ...values
                }]);
                setActiveStep(prevActiveStep => prevActiveStep + 1);
            }
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

    useEffect(() => {
        setIsLoadingSkill(true);
        api.get('skills/index').then(response => {
            // adiciona a propriedade selected aos objetos
            const skill_select = response.data.map((skill: any) => {
                return {
                    ...skill,
                    selected: false
                }
            })
            skill_select.map((skill: { skill_name: string; selected: boolean; }) => {
                if(getValues().skills.map(skill => skill.name).includes(skill.skill_name)) {
                    skill.selected = true;
                }
            })
            setSkills(skill_select);
        }).finally(() => {
            setIsLoadingSkill(false);
        })
    }, [isCreateOpen]);

    useEffect(() => {
        if(skills){
            if(skills.filter(skill => skill.selected).length > 5){
                toast.error('Você só pode selecionar 5 habilidades', {theme: 'colored'});
                let temp_skills = skills.filter(skill => skill.selected)
                for(let i = 0; i < temp_skills.length - 5; i++){
                    if(skills[i].selected){
                        skills[i].selected = false;
                        break;
                    }
                }
                let new_values = temp_skills.filter(skill => skill.selected).map(skill => {return {
                    id: skill.id,
                    name: skill.skill_name
                }})
                setValue('skills', [...new_values])
                setSkills(temp_skills);
            }
        }
    }, [skills]);

    return (
        <RegisterContainer>
            <Steps {...step_prop}/>
        </RegisterContainer>
    )
}
