import styled from 'styled-components'

export const RegisterContainer = styled.div`
    display: grid;
    grid-template-rows: 120px calc(100vh - 220px);
    transition: all .2s ease-in-out;
    .css-16ubnlw-MuiStepLabel-labelContainer{
        transition: all .2s ease-in-out;
        color: ${({ theme }) => theme.title === 'dark' ? '#fff' : '#303030'};
    }
    .css-qivjh0-MuiStepLabel-label.MuiStepLabel-alternativeLabel{
        transition: all .2s ease-in-out;
        opacity: .7;
        color: ${({ theme }) => theme.title === 'dark' ? '#fff' : '#303030'};
    }
    .css-qivjh0-MuiStepLabel-label.Mui-active{
        color: ${({ theme }) => theme.title === 'dark' ? '#fff' : '#303030'};
    }
    header{
        margin: 20px 0;
    }
    section.step_body{
        height: 100%;
        border-radius: 10px;
        padding: 20px;
        background-color: ${({ theme }) => theme.colors.background2};
        color: ${({ theme }) => theme.colors.text};
        margin: auto;
        width: 80%;
        display: grid;
        grid-template-rows: 90% 10%;
        transition: all .2s ease-in-out;
        div.body{
            position: relative;
            height: 100%;
            max-height: 100%;
            overflow-y: auto;
            div.delete_values{
                display: flex;
                flex-direction: row;
                gap: 5px;
                align-items: center;
                color: ${({ theme }) => theme.title === 'dark' ? '#fff' : '#303030'};
                border: 2px solid ${({ theme }) => theme.title === 'dark' ? '#fff' : '#303030'};
                border-radius: 10px;
                font-weight: 700;
                width: fit-content;
                height: 35px;
                padding: 0 10px;
                margin-bottom: -35px;
                cursor: pointer;
            }
        }
        footer{
            transition: all .2s ease-in-out;
            height: 100%;
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
                &.prev{
                    background-color: #777c8d;
                    color: ${({ theme }) => theme.title === 'dark' ? '#fff' : '#000'};
                }
                &.next{
                    background: linear-gradient(to right, #55a9ff, #3a74b0);
                }
            }
        }
    }
`;