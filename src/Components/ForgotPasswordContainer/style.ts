import styled,{keyframes}from 'styled-components';

const bkSweep = keyframes`
    0% {
        background-position: 0% 0%;
    }
    50% {
        background-position: 100% 100%;
    }
    100% {
        background-position: 0% 0%;
    }
`

export const All = styled.div`
    display: grid;
    grid-template-columns: 0.8fr 1fr;
    height: calc(100vh - 60px);
    div.forgotContainer {
        box-shadow: 7px -7px 17px 2px rgba(0,0,0,0.79);
        background-color: ${({ theme }) => theme.colors.background2};
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: ${({ theme }) => theme.colors.text};
        h1 {
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 20px;
        }
        label {
            opacity: 0.7;
            color: ${({ theme }) => theme.colors.text_apoio};
            font-size: 0.9rem;
            width: 80%;
            text-align: left;
            font-weight: 500;
        }
        input {
            width: 80%;
            padding: 10px;
            align-items: center;
            justify-content: center;
            border: none;
            border-radius: 0;
            outline: none;
            margin-bottom: 20px;
            border-bottom: 1px solid ${({ theme }) => theme.colors.black};
            background-color: transparent;
            text-align: center;
            color: ${({ theme }) => theme.colors.black};
        }
        div.btn{
            width: 80%;
            align-items: flex-start;
            button.btn {
                min-width: 100px;
                padding: 0.5rem 2rem;
                border-radius: 12px;
                background-color: blue;
                color: white;
                cursor: pointer;
                border: none;
                &:disabled{
                    opacity: 0.6;
                    cursor: not-allowed;  
                }
            }    
        }
    }

    div.imgContainer {
        box-shadow: inset 18px 0px 27px -16px rgba(0,0,0,0.47);
        animation: ${bkSweep} 10s linear infinite;
        background: linear-gradient(
            136deg,
            rgb(242, 113, 33, 0.5) 0%,
            rgb(233, 64, 87, 0.5) 50%,
            rgb(138, 35, 135) 100%
        );
        background-size: 400% 400%;
        width: 100%;
        height: 100%;
        display: flex;
    }
`