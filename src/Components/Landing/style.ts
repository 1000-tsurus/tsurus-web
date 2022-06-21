import styled from 'styled-components'
export const All = styled.div`
    div.carouselItem {
        width: 100%;
        padding: 2rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        place-items: center;
        aside{
            max-width: 75%;
            padding: 2rem;
            text-align: left;
            a{
                /* font-size: .5rem; */
                text-decoration: underline;
                color: ${({theme}) => theme.colors.text};
            }
            p{
                font-weight: 400;
            }
        }
        img{
            width: calc(50vh - 2rem);
            height: calc(50vh - 2rem);
        }
    }
    
`;
