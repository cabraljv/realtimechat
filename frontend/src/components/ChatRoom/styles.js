import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  header{
    display: flex;
    width: 100%;
    background: #449DD1;
    img{
      width: 60px;
      height: 60px;
      border-radius: 30px;
      margin: 10px;
    }
    div{
      margin: auto 0;
      p{
        color: #fff;
      }
      span{
        display: flex;
        div{
          width: 10px;
          height: 10px;
          border-radius: 5px;
          margin: auto 3px;
        }
        p{
          font-size: .9em;
          margin: auto 0;
        }
      }
      span.online{
        div{
          background:#49F945;
        }
        p{
          color: #49F945;
        }
      }
      span.offline{
        div{
          background:#f56f5b;
        }
        p{
          color: #f56f5b;
        }
      }
    }
    
  }
  footer{
    background: #fff;
    width: 100%;
    height: 80px;
    display: flex;
    div{
      width: 95%;
      margin: auto;
      display: flex;
      input{
        width: 90%;
        border: 2px solid #E6E6E6;
        border-radius: 5px;
        font-size: 1.1em;
        padding: 6px;
        margin: auto;
        color: #333333;
      }
      input::placeholder{
        color: #d1d1d1;
      }
      input:focus{
        outline: none;
      }
      button{
        border: 0;
        background: #449DD1;
        height: 55px;
        width: 55px;
        border-radius: 40px;
        margin-left: -55px;
        box-shadow: 4px 4px 8px rgba(68,157,209,.44);
        img{
          width: 45%;
        }
      }
      button:hover{
        background: #67a8cf;
        box-shadow: 4px 4px 12px rgba(68,157,209,.7);
        cursor: pointer;
      }
      button:focus{
        outline: none;
      }
    }
    
  }
`;
export const Content = styled.div`
  height: inherit;
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  ::-webkit-scrollbar-track
  {
    border-radius: 10px;
    background-color: #F5F5F5;
  }
  ::-webkit-scrollbar
  {
    width: 5px;
    background-color: #F5F5F5;
  }
  ::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    background-color: #8EC4E3;
  }
  div.send{
    
    margin: 20px;
    margin-left: auto;
    background: #BD9CE5;
    max-width: 350px;
    border-radius: 8px;
    z-index: 5;
    position: relative;
    p{
      padding: 8px;
      color: #fff;
      z-index: 5;
    }
    div{
      width: 33px;
      height: 33px;
      background-color: #BD9CE5;
      position: absolute;
      right: 25px;
      transform: rotate(34deg) skewY(20deg) ;
      margin-top: -25px;
      z-index: -1;
    }
  }
  div.recived{
    
    margin: 20px;
    margin-right: auto;
    background: #B2D7EC;
    max-width: 350px;
    border-radius: 8px;
    position: relative;
    z-index: 5;
    p{
      padding: 8px;
      color: #fff;
      
    }
    div{
      width: 33px;
      height: 33px;
      background-color: #B2D7EC;
      position: absolute;
      left: 10px;
      transform: rotate(34deg) skewY(20deg) ;
      margin-top: -25px;
      z-index: -1;


    }
  }
`;
