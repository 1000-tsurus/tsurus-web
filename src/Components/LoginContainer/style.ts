import styled from 'styled-components'

export const All = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 100%;
    margin-top: 5vh;
    gap: 0.5vh;

   div.loginContainer{
       background-color: #f5f5f5;
       width: 85%;
       height: 89vh;
       display: flex;
       justify-content: center;
       align-items: center;
       flex-direction: column;
       h1{
        font-size: 2rem;
        font-weight: bold;
        color: #000;
        margin-bottom: 10px;
       }
       input{
        width: 80%;
        padding: 10px;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: 0;
        outline: none;
        margin-bottom: 10px;
        border-bottom: 1px solid black;
        background-color: transparent;
        text-align: center;
       }
       label{
        font-size: 1rem;
        color: black;
       }
       div.btn{
           align-items: flex-start;
           width: 80%;
           display: flex;
           justify-content: space-between; 
           align-items: center;
           button.forgotPassword{
            color: blue;
            border:none;
            outline: none;
            text-decoration: under;
            cursor: pointer;
            padding: none;
            margin: 0;
            background-color: transparent;
            }
            button.btn{
               padding: .5rem 2rem;
               border-radius: 12px;
               background-color: blue;
               color: white;
               cursor: pointer;
               border: none;
            }
       }
       
   }

   div.imgContainer{
        background-color: #000;
        width: 115%;
        height: 89vh;
        display: flex;
   }
`   