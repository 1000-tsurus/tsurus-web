import styled from 'styled-components'
export const All = styled.div`
    div.carouselItem{
        max-height:60vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 60vh;
        display: grid;
        place-items: center;
        div{
            width: 100%;
            backdrop-filter: blur(10px);
            background-color: rgba(0, 0, 0, .5);
            color: #fff!important;
            h1.title{
                font-family: 'Montserrat', sans-serif;
                font-weight: lighter;
                strong{
                    text-decoration: underline;
                }
            }
            p{
                padding-bottom: 5px;
                margin-top: -7px;
                font-family: 'Montserrat', sans-serif;
                font-weight: bolder;
            }
        }
    }
`;
