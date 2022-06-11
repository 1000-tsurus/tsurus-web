import styled, { keyframes } from 'styled-components'

export const RegisterContainer = styled.div``

export const StepContainer = styled.div`
    height: 100%;
    div.row_error {
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: ${({ theme }) => theme.colors.danger};
        gap: 5px;
    }
    section.user_infos {
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        gap: 2.5%;
        aside.first_left {
            height: 80%;
            display: grid;
            align-items: center;
            div.user_infos_row {
                height: fit-content;
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                label {
                    padding-left: 10px;
                    margin-bottom: 15px;
                    font-weight: 700;
                }
                input.the_input {
                    font-family: 'Montserrat', sans-serif;
                    width: 80%;
                    padding: 7px 5px;
                    border-radius: 5px;
                    border: none;
                    outline: none;
                }
            }
        }
        aside.first_right {
            height: 65%;
            display: grid;
            align-items: center;
            div.user_infos_row {
                height: fit-content;
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                label {
                    padding-left: 10px;
                    margin-bottom: 15px;
                    font-weight: 700;
                }
                .the_input {
                    font-family: 'Montserrat', sans-serif;
                    width: 80%;
                    padding: 7px 5px;
                    border-radius: 5px;
                    border: none;
                    outline: none;
                }
            }
            div.phone_type_box {
                display: flex;
                flex-direction: column;
                gap: 10px;
                margin-top: 15px;
                div.check_row {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 5px;
                    input {
                    }
                    span {
                        padding-left: 10px;
                        padding: 0 !important;
                        font-size: 0.9rem;
                        font-family: 'Roboto', sans-serif;
                    }
                }
            }
        }
    }
    section.life_infos {
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        gap: 5%;
        aside.sec_left {
            display: flex;
            flex-direction: column;
            gap: 5.7rem;
            div.occ_row {
                height: fit-content;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                button.add_skill_button {
                    background-color: transparent;
                    border: 2px solid ${({ theme }) => theme.colors.text};
                    color: ${({ theme }) => theme.colors.text};
                    outline: none;
                    width: fit-content;
                    padding: 0 10px;
                    height: 40px;
                    border-radius: 5px;
                    font-family: 'Montserrat', sans-serif;
                    cursor: pointer;
                }
                label {
                    padding-left: 10px;
                    margin-bottom: 15px;
                    font-weight: 700;
                }
                input.the_input {
                    font-family: 'Montserrat', sans-serif;
                    width: 80%;
                    padding: 7px 5px;
                    border-radius: 5px;
                    border: none;
                    outline: none;
                }
                div.row{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem;
                }
            }
        }
        aside.sec_right {
            display: flex;
            flex-direction: column;
            gap: calc(7rem - 80px);
            div.date_row{
                height: fit-content;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                label {
                    padding-left: 10px;
                    margin-bottom: 15px;
                    font-weight: 700;
                }
                input.date {
                    font-family: 'Montserrat', sans-serif;
                    width: 100%;
                    padding: 7px 5px;
                    border-radius: 5px;
                    border: none;
                    outline: none;
                }   
            }
            div.occ_row {
                height: fit-content;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                label {
                    padding-left: 10px;
                    margin-bottom: 15px;
                    font-weight: 700;
                }
                input.the_input {
                    font-family: 'Montserrat', sans-serif;
                    width: 80%;
                    padding: 7px 5px;
                    border-radius: 5px;
                    border: none;
                    outline: none;
                }
                textarea {
                    font-family: 'Montserrat', sans-serif;
                    width: 100%;
                    max-width: 100%;
                    padding: 7px 5px;
                    border-radius: 5px;
                    border: none;
                    outline: none;
                    min-height: 100px;
                    max-height: 100%;
                }
            }
        }
    }
    section.final_infos{
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 100%;
        align-items: center;
        gap: 2.5%;
        aside.finish_left{
            h1{
                font-size: 2rem;
                margin-bottom: 1rem;
            }
            p{
                font-weight: 400;
                strong{
                    font-weight: 700;
                }
            }
        }
        aside.finish_right{
            height: calc(100% - 4rem);
            textarea{
                border-radius: 1rem;
                border: none;
                outline: none;
                padding: 1rem;
                font-family: 'Montserrat', sans-serif;
                font-size: 1.1rem;
                height: 100%;
                max-height: 100%;
                width: 100%;
                max-width: 100%;
                resize: none;
            }
        }
    }
`
