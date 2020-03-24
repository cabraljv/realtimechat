import styled from 'styled-components';

export const Container = styled.div`
  height: 70px;
  display: flex;
  padding: 15px;
  border-bottom: 1px solid #f5f5f5;
  transition: .3s ease;
  cursor: pointer;
  :hover{
    background: #fafafa;
  }
  img{
      height: 50px;
      width: 50px;
      border-radius: 25px;
      margin: auto 0;
  }
  p{
      margin: auto 0; 
      padding: 10px;
      font-size: 0.9em;
      font-weight: 400;
      color: #999999;

  }
  span{
      
      margin: auto 0;
      margin-left: auto;
      display: flex;
      p{
        padding: 3px;
      }
      div{
          width: 10px;
          height: 10px;
          border-radius: 10px;
          margin: auto 0;
      }
  }
  span.online{
    p{
      color: #49F945;
    }
    div{
      background: #49F945;
    }
  }
  span.offline{
    p{
      color: #f56f5b;
    }
    div{
      background: #f56f5b;
    }
  }
  
`;
