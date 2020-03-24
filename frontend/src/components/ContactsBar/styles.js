import styled from 'styled-components';

export const Container = styled.div`
  width: 30%;
  min-width: 250px;
  max-width: 320px;
  height: 100vh;
  background: #fff;
  box-shadow: 4px 0px 5px rgba(0,0,0,.1);
  display: flex;
  flex-direction: column;
  header{
      display: flex;
      background: #FAFAFA;
      padding: 20px;
      img.pp{
          width: 80px;
          height: 80px;
          border-radius: 50px;
      }
      div#user{
          display: flex;
          flex-direction: column;
          margin: auto 10px;
          p{
            padding-left: 8px;
              color: #646464;
              font-size: 1.2em;
          }
          span{
            display: flex;
            padding-left: 8px;
            p.status{
              padding-left: 2px;
              color: #49F945;
              font-size: 0.9em;
            }
            div#ball{
              width: 10px;
              height: 10px;
              border-radius: 5px;
              background: #49F945;
              padding: 0;
              margin: auto 0;
              margin-right: 2px;
            }
          }
          
          
      }
      img.exit{
        margin-top: auto;
        margin-left: auto;
        margin-right: 13px;
        padding: 10px;
        border-radius: 8px;
        transition: 0.2s ease;
        cursor: pointer;
      }
      img.exit:hover{
        background: #e8e8e8;
      }
  }
  section#contacts{
    height: inherit;
    overflow-y: scroll;
  }
  section#contacts::-webkit-scrollbar-track
  {
    border-radius: 10px;
    background-color: #F5F5F5;
  }
  section#contacts::-webkit-scrollbar
  {
    width: 5px;
    background-color: #F5F5F5;
  }
  section#contacts::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    background-color: #449DD1;
  }
  section#add-contact{
    display: flex;
    
    margin-top: auto;
    width: 100%;
    background: #FAFAFA;
    div{
      display: flex;
      padding: 15px;
      margin: 8px auto;
      border-radius: 5px;
      transition: .4s ease;
      cursor: pointer;
      
      img{
        width: 30px;
      }
      p{
        color: #808080;
        margin: auto 5px;
      }
    }
    div:hover{
      background: #e8e8e8;
    }
    a{
      margin: auto;
      padding: 10px;
      border-radius: 5px;
      transition: .3s ease;
      cursor: pointer;
    }
    a:hover{
      background: #e8e8e8;
      
    }
    
  }
`;
