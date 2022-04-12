import { Modal } from '@mui/material';
import styled, {keyframes} from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const StyledModal = styled(Modal)`
    animation: ${fadeIn} .3s ease-in-out;
    div.card{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 60vw;
        height: 60vh;
        background-color: ${({ theme }) => theme.colors.background2};
        border-radius: 10px;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        justify-content: space-between;
        outline: none;
        header{ 
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 2rem;
            svg{
                cursor: pointer;
            }
            h2{ 
                font-size: 1.5rem;
            }
        }
        section{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            label{
                font-weight: 700;
            }
            input{
                font-family: 'Montserrat', sans-serif;
                width: 100%;
                padding: 7px 5px;
                border-radius: 5px;
                border: none;
                outline: none;
            }
        }
        footer{
            transition: all .2s ease-in-out;
            height: 50px;
            display: flex;
            justify-content: space-between;
            gap: 2.5%;
            button{
                transition: all .2s ease-in-out;
                margin: 0 auto;
                width: 100%;
                border-radius: 5px;
                border: none;
                cursor: pointer;
                color: #fff;
                font-weight: 700;
                font-size: 1.2rem;
                font-family: 'Montserrat', sans-serif;
                &:disabled{
                    transition: all .2s ease-in-out;
                    opacity: .5;
                    cursor: not-allowed;
                }
                &.cancel{
                    background-color: #777c8d;
                    color: ${({ theme }) => theme.title === 'dark' ? '#fff' : '#000'};
                }
                &.confirm{
                    background: linear-gradient(to right, #55a9ff, #3a74b0);
                }
            }
        }
    }
`;