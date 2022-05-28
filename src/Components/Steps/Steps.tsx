import React, { useContext, useState } from 'react'
import { styled } from '@mui/material/styles'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector'
import { StepIconProps } from '@mui/material/StepIcon'
import { RegisterContainer } from './style'
import { ThemeContext } from '@/providers'
import * as FiIcons from 'react-icons/fi'

type Props = {
    steps: {
        title: string
        description: string
        icon: React.ReactElement
        id: number
        content: JSX.Element
    }[]
    step: number
    onSubmit: () => void
    setStep: (step: number) => void
    handleClearForms?: () => void
    handleNextStep: () => void
    handlePrevStep: () => void
    handleSelectStep: (step_id: number) => void
}

export default function Steps({
    steps,
    step,
    setStep,
    onSubmit,
    handleClearForms,
    handleNextStep,
    handlePrevStep,
    handleSelectStep
}: Props) {
    const { selectedTheme } = useContext(ThemeContext),
        ColorlibConnector = styled(StepConnector)(({ theme }) => ({
            [`&.${stepConnectorClasses.alternativeLabel}`]: {
                top: 22
            },
            [`&.${stepConnectorClasses.active}`]: {
                [`& .${stepConnectorClasses.line}`]: {
                    transition: 'all .2s ease-in-out',
                    backgroundImage:
                        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)'
                }
            },
            [`&.${stepConnectorClasses.completed}`]: {
                [`& .${stepConnectorClasses.line}`]: {
                    transition: 'all .2s ease-in-out',
                    backgroundImage:
                        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)'
                }
            },
            [`& .${stepConnectorClasses.line}`]: {
                height: 3,
                border: 0,
                backgroundColor: selectedTheme.title === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
                borderRadius: 1
            }
        })),
        ColorlibStepIconRoot = styled('div')<{
            ownerState: { completed?: boolean; active?: boolean }
        }>(({ ownerState }) => ({
            backgroundColor: selectedTheme.title === 'dark' ? '#424242' : '#eaeaf0',
            zIndex: 1,
            color: selectedTheme.colors.text,
            width: 50,
            height: 50,
            display: 'flex',
            transition: 'all .2s ease-in-out',
            borderRadius: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            ...(ownerState.active && {
                color: '#fff',
                backgroundImage:
                    'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
                boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)'
            }),
            ...(ownerState.completed && {
                color: '#fff',
                backgroundImage:
                    'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)'
            })
        })),
        ColorlibStepIcon = (props: StepIconProps) => {
            const { active, completed, className } = props

            return (
                <ColorlibStepIconRoot
                    onClickCapture={() => handleSelectStep(Number(props.icon) - 1)}
                    ownerState={{ completed, active }}
                    className={className}
                    style={{
                        cursor: 'pointer'
                    }}
                >
                    {steps[Number(props.icon) - 1].icon}
                </ColorlibStepIconRoot>
            )
        }

    return (
        <RegisterContainer>
            <header>
                <Stepper alternativeLabel activeStep={step} connector={<ColorlibConnector />}>
                    {steps.map(label => (
                        <Step key={label.title}>
                            <StepLabel
                                StepIconComponent={ColorlibStepIcon}
                                style={{
                                    color: selectedTheme.colors.text
                                }}
                            >
                                {label.title}
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </header>

            <section className='step_body'>
                <div className='body'>
                    {handleClearForms && (
                        <div
                            onClick={handleClearForms}
                            className='delete_values'
                            title='Exclui os dados salvos nos formulários'
                        >
                            <FiIcons.FiTrash2 />
                            Excluir
                        </div>
                    )}
                    {steps.map(s => {
                        return step === s.id && s.content
                    })}
                </div>

                <footer>
                    <button onClick={handlePrevStep} disabled={step === 0} className='prev'>
                        Anterior
                    </button>
                    {!(step === steps.length - 1) ? (
                        <button onClick={handleNextStep} disabled={step === steps.length - 1} className='next'>
                            Próximo
                        </button>
                    ) : (
                        <button onClick={onSubmit} className='next'>
                            Finalizar
                        </button>
                    )}
                </footer>
            </section>
        </RegisterContainer>
    )
}
