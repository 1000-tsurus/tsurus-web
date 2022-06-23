import styled from "styled-components";

export const UserContainer = styled.div`
    min-height: 100vh;
    header{
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        display: grid;
        place-items: center;
        padding: 1rem 0;
        div.first_profile_view{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            div.avatar{
                padding: 5px;
                background-color: #fff;
                border-radius: 50%;
                display: grid;
                place-items: center;
                max-width: 150px;
                max-height: 150px;
                transition: all 0.3s ease-in-out;
                cursor: pointer;
                img{
                    border-radius: 50%;
                    height: 100%;
                    width: 100%;
                    object-fit: contain;
                }
                &:hover{
                    transform: scale(3) translateY(35%);
                }
            }
            h1{
                color: #fff;
            }
            footer{
                gap: .5rem;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                p{
                    font-family: 'Roboto', sans-serif;
                    color: #000;
                    font-weight: 900;
                    background-color: #fff;
                    border-radius: 50px;
                    padding: 5px;
                }
            }
        }
    }
    section.grid{
        display: grid;
        grid-template-columns: .3fr 1fr;
        min-height: calc(45vw - 200px);
        aside{
            padding: 20px;
            height: 100%;
            background-color: ${props => props.theme.colors.background2};
            h1{
                font-size: 2rem;
                margin-bottom: 1rem;
            }
            ul{
                list-style: none;
                gap: 3rem;
                li{
                    font-weight: 400;
                }
            }
        }
        div.body{
            display: flex;
            flex-direction: column;
            gap: 3rem;
            padding: 1.5rem;
            section.text_container{
                width: 100%;
                padding: 1.5rem;
                border-radius: 15px;
                border: 1px solid ${({theme}) => theme.colors.text_apoio};
                h1{
                    margin-bottom: 1rem;
                }
                p{
                    font-family: 'Roboto', sans-serif;
                    padding: .5rem;
                    border-radius: 15px;
                    background-color: ${({theme}) => theme.colors.background2};
                    font-weight: 400;
                }
            }
        }
    }
`;