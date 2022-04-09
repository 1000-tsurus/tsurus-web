import styled from 'styled-components'

export const All = styled.div`
    padding: 5px;
    width: 100vw;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.background2};
    color: ${({ theme }) => theme.colors.text};
    display: grid;
    grid-template-columns: 50vw 50vw;
    @media (max-width: 700px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }
    div.left-container {
        width: 100%;
        display: grid;
        place-items: center;
        img {
            object-fit: contain;
            width: 60%;
            max-height: 30vh;
            margin: auto;
        }
    }
    div.right-container {
        display: flex;
        flex-direction: column;
        @media (max-width: 700px) {
            text-align: center;
        }
        p.title {
            margin-bottom: 10px;
            margin-top: 30px;
            font-family: 'Lato', sans-serif;
            font-weight: lighter;
            font-size: 0.85rem;
        }
        div.containerFooter {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            font-family: 'Rubik', sans-serif;
            font-weight: bolder;
            div.socialMedia {
                margin-top: 5px;
            }
        }
    }

    div.right-container {
    }
`
