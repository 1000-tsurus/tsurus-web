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
        }
    }
    section{
        display: grid;
        grid-template-columns: .3fr 1fr;
        height: calc(45vw - 200px);
        min-height: calc(45vw - 200px);
        aside{
            height: 100%;
            background-color: ${props => props.theme.colors.background2};
            border-radius: 0 20px 20px 0;
            border-bottom: 1px solid ${props => props.theme.colors.white};
            h1{

            }
            ul{
                li{

                }
            }
        }
    }
`;