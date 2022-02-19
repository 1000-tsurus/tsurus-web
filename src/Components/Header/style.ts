import styled from "styled-components"

export const All = styled.header<{ theme: string }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 70px;
    background-color: ${props => props.theme === 'dark' ? '#185a9e' : '#55a9ff'};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    -webkit-box-shadow: 0px 5px 25px -5px rgba(0,0,0,0.2); 
    box-shadow: 0px 5px 25px -5px rgba(0,0,0,0.2);
    div.left{
        img{
            object-fit: contain;
            height: 60px;
        }
    }
    div.right{
        display: flex;
        align-items: center;
        a{
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        svg.icon{
            border-radius: 50%;
            border: 2px solid ${props => props.theme === 'dark' ? '#fff' : '#000'};
            font-size: 2rem;
        }
        p.login{
            display: flex;
            margin-left: 5px;
            strong{
                margin-left:2.5px;
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
