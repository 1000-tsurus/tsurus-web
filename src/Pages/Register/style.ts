import styled from 'styled-components'

export const RegisterContainer = styled.div`


`;

export const StepContainer = styled.div`
    height: 100%;
    section.user_infos{
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        gap: 2.5%;
        aside.first_left{
            height: 80%;
            display: grid;
            align-items: center;
            div.user_infos_row{
                height: fit-content;
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                label{
                    margin-bottom: 15px;
                    font-weight: 700;
                }
                input.the_input{
                    font-family: 'Montserrat', sans-serif;
                    width: 80%;
                    padding: 7px 5px;
                    border-radius: 5px;
                    border: none;
                    outline: none;
                }
            }
        }
        aside.first_right{
            height: 70%;
            display: grid;
            align-items: center;
            div.user_infos_row{
                height: fit-content;
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                label{
                    margin-bottom: 15px;
                    font-weight: 700;
                }
                .the_input{
                    font-family: 'Montserrat', sans-serif;
                    width: 80%;
                    padding: 7px 5px;
                    border-radius: 5px;
                    border: none;
                    outline: none;
                }
            }
            div.phone_type_box{
                display: flex;
                flex-direction: column;
                gap: 10px;
                margin-top: 15px;
                div.check_row{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 5px;
                    input{
                    }
                    span{
                        padding: 0 !important;
                        font-size: .9rem;
                        font-family: 'Roboto', sans-serif;
                    }
                }
            }
        }
    }
`;