import styled, { keyframes } from 'styled-components'

export const All = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    height: calc(100vh - 60px);
    div.loginContainer {
        background-color: #434a63;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #c7c7c7;
        h1 {
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 10px;
        }
        input {
            width: 80%;
            padding: 10px;
            align-items: center;
            justify-content: center;
            border: none;
            border-radius: 0;
            outline: none;
            margin-bottom: 10px;
            border-bottom: 1px solid #fff;
            background-color: transparent;
            text-align: center;
            color: #c7c7c7;
        }
        label {
            opacity: 0.7;
            font-size: 0.9rem;
            width: 80%;
            text-align: left;
            font-weight: 500;
        }
        div.btn {
            align-items: flex-start;
            width: 80%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            aside{
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                gap: 0.3em;
                color: #c7c7c7;
                a{
                    color: #c7c7c7;
                    font-size: 0.9rem;
                    border: none;
                    outline: none;
                    text-decoration: under;
                    cursor: pointer;
                    padding: none;
                    font-weight: 400;
                    margin: 0;
                    background-color: transparent;
                    & b{
                        text-decoration: underline;
                    }
                }
                a.forgotPassword{
                    text-align: right;
                }
            }
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
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;
        padding: 40px;
        img{
            width: 70%;
        }
    }
`
