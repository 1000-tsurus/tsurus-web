import { motion } from 'framer-motion';
import styled, { css } from "styled-components";

export const ContainerConfirmButton = styled(motion.div)`
    ${({ theme }) => css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 45rem;
        max-width: 45rem;
        background-color: ${theme.colors.background};
        border-radius: 2rem;
        font-family: 'Montserrat', sans-serif;

        ${theme.title === 'light' && css`
            box-shadow: 0px 2px 10px ${theme.colors.black}22;
        `}
        outline: none;
        /* row */
        display: flex;
        flex-wrap: wrap;
        padding: 2rem;
        div.icon-container{
            width: 100%;
            display: flex;
            justify-content: center;
            i.the-icon{
                font-size: 12rem;
                color: ${theme.colors.success};

                &::before {
                    width: unset;
                }
            }
        }
        div.texts{
            flex: 0 0 100%;
            max-width: 100%;
            padding: 2rem 2rem 3rem 2rem;
            text-align: center;
            span{
                font-family: 'Montserrat', sans-serif;
                &.title {
                    font-size: 2rem;
                    font-weight: 700;
                    color: ${theme.colors.black};
                }
                &.subtitle{
                    max-width: 90%;
                    font-size: 1rem;
                    opacity: .7;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: auto;
                    margin-top: 1rem;
                    width: fit-content;
                }
            }
        }
        div.buttons{
            flex: 0 0 100%;
            max-width: 100%;
            margin: auto;
            display: flex;
            &.single{
                max-width: 80%;
            }
            div.btn-container{
                flex: 1;
                display: flex;
                margin: auto;
                padding: 0 5px;
                transition: filter 0.2s;
                
                button.the-button{
                    font-family: 'Montserrat', sans-serif;
                    border: 2px solid transparent;
                    border-radius: 1rem;
                    text-align: center;
                    padding: 1rem;
                    width: 100%;
                    font-weight: 700;
                    font-size: 1rem;
                    cursor: pointer;
                    &.loading{
                        padding: 0.6rem;
                    }
                }

                &:hover {
                    filter: brightness(0.8);
                }
            }
        }
    `}
`;