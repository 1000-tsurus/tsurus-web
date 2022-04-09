import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';
import { RegisterContainer } from './style'

type Props = {
    steps: { 
        title: string,
        description: string,
        icon: React.ReactElement,
        content: JSX.Element
    }[];
    step: number;
    setStep: (step: number) => void;
    handleNextStep: () => void;
    handlePrevStep: () => void;
    handleSelectStep: (step_id: number) => void;
}

export default function Steps({
    steps,
    step,
    setStep,
    handleNextStep,
    handlePrevStep,
    handleSelectStep,
}: Props) {
    const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
            [`&.${stepConnectorClasses.alternativeLabel}`]: {
                top: 22,
            },
            [`&.${stepConnectorClasses.active}`]: {
                [`& .${stepConnectorClasses.line}`]: {
                    transition: 'all .2s ease-in-out',
                    backgroundImage:
                        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
                },
            },
            [`&.${stepConnectorClasses.completed}`]: {
                [`& .${stepConnectorClasses.line}`]: {
                    transition: 'all .2s ease-in-out',
                    backgroundImage:
                        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
                },
            },
            [`& .${stepConnectorClasses.line}`]: {
                height: 3,
                border: 0,
                backgroundColor:
                    theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
                borderRadius: 1,
            },
        })),
        ColorlibStepIconRoot = styled('div')<{
            ownerState: { completed?: boolean; active?: boolean };
        }>(({ theme, ownerState }) => ({
            backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
            zIndex: 1,
            color: '#fff',
            width: 50,
            height: 50,
            display: 'flex',
            transition: 'all .2s ease-in-out',
            borderRadius: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            ...(ownerState.active && {
                backgroundImage:
                    'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
                boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
            }),
            ...(ownerState.completed && {
                backgroundImage:
                    'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
            }),
        })),
        ColorlibStepIcon = (props: StepIconProps) => {
            const { active, completed, className } = props;

            return (
                <ColorlibStepIconRoot 
                    onClickCapture={() => 
                        handleSelectStep(Number(props.icon) - 1)
                    }
                    ownerState={{ completed, active }}
                    className={className}
                    style={{
                        cursor: 'pointer'
                    }}
                >
                    {steps[Number(props.icon) - 1].icon}
                </ColorlibStepIconRoot>
            );
        }

    return (
        <RegisterContainer>
            <header>
                <Stepper alternativeLabel activeStep={step} connector={<ColorlibConnector />}>
                    {steps.map((label) => (
                        <Step key={label.title}>
                            <StepLabel StepIconComponent={ColorlibStepIcon}>{label.title}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </header>

            <section>
                <div className='body'>
                    {steps[step].content}
                </div>

                <footer>
                    <button
                        onClick={handlePrevStep}
                        disabled={step === 0}
                        className='prev'
                    >Anterior</button>
                    <button
                        onClick={handleNextStep}
                        disabled={step === 2}
                        className='next'
                    >Próximo</button>
                </footer>
            </section>
        </RegisterContainer>
    )
}
