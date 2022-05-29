import styled, { css } from "styled-components";

export const DateRow = styled.div<{ hasMax?: boolean }>`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;
    width: 100%;
    ${({ theme, hasMax }) => css`
        input[type="date"] {
            height: 100%;
            background: ${theme.colors.absolute_white};
            color: ${theme.title !== 'light' ? theme.colors.white : theme.colors.text_apoio};
            border-radius: 5px;
            position: relative;
            padding: 10px;
            outline: none;
            border: none;

            // Estilização para quando existir uma data máxima e não quebrar margens
            ${hasMax && css`
                &::-webkit-datetime-edit {
                    margin-right: 1.8rem;
                }
            `};

            &::-webkit-datetime-edit-year-field {
                color: ${theme.title !== 'light' ? theme.colors.white : theme.colors.text_apoio};
            };

            &::-webkit-calendar-picker-indicator {
                color: transparent;
                background: none;
                z-index: 1;
                cursor: pointer;
                margin-left: -15px;
            };

            &:before {
                position: absolute;
                top: 35%;
                right: 0.5rem;
                color: ${theme.title !== 'light' ? theme.colors.white : theme.colors.text_apoio};
                width: 20px;
                height: 40px;
            }
        }

        div.container-error {
            position: absolute;
            bottom: -2.7rem;
            left: 0;
            display: block;
            padding-top: 0.8rem;
            padding-left: 0.8rem;
            color: ${theme.colors.danger};

            span.error-msg {
                font-style: italic;
                font-size: 1.2rem;
                margin-left: 0.4rem;
            }

            i {
                font-size: 1.4rem;
            }
        }
    `}
`;