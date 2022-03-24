import styled from 'styled-components';

export const All = styled.div<{ theme: string }>`
    width: 95%;
    height: 350px;
    background-color: ${({ theme }) => theme === 'dark' ? 'rgba(70, 70, 70)' : 'rgba(70, 70, 70)'}; 
    border-radius: 25px;
    transition: all .2s ease-in-out;
    -webkit-box-shadow: 0px 14px 33px -11px rgba(0,0,0,0.2); 
    box-shadow: 0px 14px 33px -11px rgba(0,0,0,0.2);
    &:hover{
        transform: scale(1.02);
        -webkit-box-shadow: 0px 14px 33px -11px rgba(0,0,0,0.68); 
        box-shadow: 0px 14px 33px -11px rgba(0,0,0,0.68);
    }
    div.card{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding: 25px;
        height: 350px;
        width: 100%;
        gap: 25px;
        img{
            border-radius: 20px;
            object-fit: contain;
            height: 100%;
        }
        aside{
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            height: 300px;
            width: 100%;
            h1{
                font-family: 'Montserrat', sans-serif;
                font-weight: bolder;
                margin-bottom: 10px;
            }
            div.infos{
                height: 250px;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                gap: 15px;
                div.infos_content{
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    h3{
                        font-family: 'Montserrat', sans-serif;
                        font-weight: lighter;
                    }
                    div.skills{
                        display: flex;
                        flex-direction: row;
                        gap: 10px;
                        p{
                            font-family: 'Montserrat', sans-serif;
                            font-weight: bolder;
                            font-size: .8rem;
                            background-color: #fff;
                            border-radius: 20px;
                            padding: 2px 7px;
                            color: #000 !important;
                        }
                    }
                    div.help{
                        display: flex;
                        flex-direction: row;
                        gap: 10px;
                        span{
                            overflow-y: auto;
                            max-height: 100px;
                            font-family: 'Montserrat', sans-serif;
                            font-weight: bolder;
                            font-size: .8rem;
                            background-color: #fff;
                            border-radius: 10px;
                            padding: 5px 10px;
                            color: #000 !important;
                        }
                    }
                } 
            }
            a{
                font-family: 'Montserrat', sans-serif;
                font-weight: bolder;
                font-size: .8rem;
                color: #fff;
                text-decoration: none;
                border-radius: 20px;
                border: 2px solid #fff;
                width: fit-content;
                padding: 2.5px 10px;
                transition: all .2s ease-in-out;
                &:hover{
                    -webkit-box-shadow: 0px 14px 33px -11px rgba(0,0,0,0.68); 
                    box-shadow: 0px 14px 33px -11px rgba(0,0,0,0.68);
                    background-color: #fff;
                    color: #000;
                    transform: scale(1.02);
                }
            }
        }
    }
`;
