import styled from "styled-components";

export const List = styled.div`
    padding: 20px 45px;
    height: 100%;
    color: ${({ theme }) => theme.colors.text};
    h1{
        font-family: 'Montserrat', sans-serif;
        font-weight: bolder;
    }
    div.mentor_grid{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(350px);
        grid-row-gap: 50px;
    }
`;