import styled from "styled-components"

export const All = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 70px;
    background-image: ${({ theme }) => theme.title === 'dark' ? 'linear-gradient(-90deg, #185a9e, #11467d)' : 'linear-gradient(-90deg, #55a9ff, #3480cf)'};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    -webkit-box-shadow: 0px 5px 25px -5px rgba(0,0,0,0.2); 
    box-shadow: 0px 5px 25px -5px rgba(0,0,0,0.2);
    z-index: 1000;
    div.left{
        height: 60px;
        img{
            object-fit: contain;
            height: 60px;
        }
    }
    div.right{
        display: flex;
        align-items: center;
        place-content: center;
        flex-direction: row;
        justify-content: flex-end;
        gap: .5rem;
        a{
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        div.logOut{
            display: grid;
            place-items: center;
            font-size: 1.5rem;
            cursor: pointer;
            margin-left: .7rem;
        }
        svg.icon{
            border-radius: 50%;
            border: 2px solid ${({ theme }) => theme.title === 'dark' ? '#fff' : '#000'};
            font-size: 2rem;
        }
        p.login{
            display: flex;
            margin-left: 5px;
            strong{
                margin-left:2.5px;
            }
            &.sublimed{
                text-decoration: underline;
                font-weight: bolder;
                font-family: 'Rubik', sans-serif;
            }
        }
    }
`;

export const Checkbox = styled.input`
    opacity: 0;
    position: absolute;
`

export const Ball = styled.div<{ isChecked?: boolean }>`
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    height: 16px;
    width: 16px;
    transform: translateX(0px);
    transition: transform 0.2s linear;
    transform: ${({ isChecked }) => (isChecked ? 'translateX(17px);' : '')};
`

export const Label = styled.label`
    background-color: #111;
    border-radius: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    position: relative;
    height: 20px;
    width: 35px;
    transform: scale(1.5);
`

export const Root = styled.div`
    transition: background 0.2s linear;
`

export const SunIcon = styled.i`
    color: #f39c12;
    & svg {
        & path {
            color: #f39c12 !important;
        }
        font-size: 0.6em;
    }
`
export const MoonIcon = styled.i`
    color: #f1c40f;
    & svg {
        & path {
            color: #f1c40f !important;
        }
        font-size: 0.6em;
    }
`
