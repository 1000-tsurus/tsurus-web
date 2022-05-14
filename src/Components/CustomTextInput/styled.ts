import styled from 'styled-components'

export const ContainerTextInput = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 5rem;
    label.the-label {
        font-size: 1.4rem;
        flex: 0 0 100%;
        max-width: 100%;
        padding-left: 10px;
        padding-bottom: 5px;
        color: ${({ theme }) => (theme.title === 'light' ? 'rgba(43, 43, 43, 0.67)' : theme.colors.black)};
        & span.optional {
            color: ${({ theme }) => theme.colors.white};
            font-size: 1.1rem;
            font-style: italic;
            padding-left: 10px;
        }
    }
    input.the-input {
        flex: 0 0 100%;
        max-width: 100%;
        font-size: 1rem;
        border-radius: 5px;
        border: none;
        padding: 0.5rem;
        background: ${({ theme }) => theme.colors.absolute_white};
        color: ${({ theme }) => (theme.title !== 'light' ? theme.colors.white : theme.colors.text_apoio)};
        outline: none;
        font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
        &::placeholder {
            color: ${({ theme }) => theme.colors.white};
        }
    }
    div.container-error {
        display: block;
        padding-top: 0.8rem;
        padding-left: 0.8rem;
        color: ${({ theme }) => theme.colors.danger};
        span.error-msg {
            font-style: italic;
            font-size: 1.2rem;
            margin-left: 0.4rem;
        }
        i {
            font-size: 1.4rem;
        }
    }
`
