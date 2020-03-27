import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,.6);
  z-index: 10;
  display: flex;
  transition: .5s ease;
  div{
      position: absolute;
      width: 100vw;
      height: 100vh;
      z-index: 1;
  }
  section{
    z-index: 5;
    background: #fff;
    border-radius: 15px;
    margin: auto;
    padding: 15px;
    display: flex;
    flex-direction: column;
    header{
        display: flex;
        p{
            font-size: 1.6em;
            margin: auto 4px;
        }
        margin: auto;
        
    }
    input{
        border-radius: 5px;
        border: 2px solid #D9D9D9;
        padding: 10px;
        font-size: 1.1em;
        margin: 30px;
        width: 300px;
    }
    input:focus{
        outline: none;
    }
    button{
        width: 60px;
        height: 60px;
        border: 0;
        border-radius: 30px;
        background: #449DD1;
        margin: auto;
        margin-bottom: -40px;
        cursor: pointer;
        img{
            width: 50%;
        }
    }
    button:focus{
        outline: none;
    }
    button:hover{
        background: #67a8cf;
    }
  }
`;
