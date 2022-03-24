import styled from 'styled-components'

export const All = styled.div`
  .card-container{
    display: flex;
    align-items: flex-start;
    justify-content: center; 
    flex-wrap: wrap;
    flex-direction:column;
  }
  
  .btn{
    font-size:1rem;
    padding: .3rem 1.6rem;
    border-radius: 5rem;
    margin-top: 1rem;
    background: none;
    color: black;
    cursor: pointer;
    border: .1rem solid black;
  }

  .btn:hover{
    background-color: #185a9e;
    color: white;
    transition:0.2s linear;
  }

  .mentorsArea{
    font-size:1.2rem;
    font-family: 'Lato', sans-serif;
  }

  h3{
    font-family: 'Rubik', sans-serif;
    font-size: 1.7rem;
    color:black
  }

  .card-container .card{
    background-color: #fff;
    width: 20rem;
    padding: 2rem;
    margin: 2rem;
    border-radius: 1rem;
    box-shadow: 0 .3rem .5rem rgba(0, 0, 0, .2);
    text-align: center;
    transition:0.2s linear;
  }

  .card-container .card:hover{
    transform: scale(1.05);
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, .2); 
  }

  img{
    display: inline-block;
    height: 200px;
    width: 200px;
    object-fit: cover;
    border-radius:50%;
  }

  .mentorsArea{
     color:black;
  }
`
