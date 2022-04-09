import styled from 'styled-components'

export const RegisterContainer = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;
    header{
        margin-top: 20px;
    }
    section{
        background-color: $${({ theme }) => theme.colors.background};
        margin: auto;
        width: 80%;
        div.body{

        }
        footer{

        }
    }
`;