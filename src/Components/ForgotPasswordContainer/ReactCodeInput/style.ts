import styled from 'styled-components'
import ReactCodeInput from 'react-code-input'


export const CodeInputStyled = styled(ReactCodeInput)`
    height: 100vh;
    width: 100vw;
    align-items: center;
    justify-content: center;
    display: flex;
    font-size: 2rem;
    input{
        background-color: rgba(158, 158, 158, 0.3);
        padding: 10px;
        width: 100px;
        height: 100px;
        text-align: center;
        font-size: 30px;
        border-radius: 0.8rem;
        margin: 0 0.5rem 2rem;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input[type=number] {
      -moz-appearance: textfield;
    }
`;