import styled from 'styled-components';

export const Container = styled.div`
  width: 30%;
  min-width: 250px;
  max-width: 320px;
  height: 100vh;
  background: #fff;
  box-shadow: 4px 0px 5px rgba(0,0,0,.1);
  header{
      display: flex;
      background: #FAFAFA;
      padding: 20px;
      img.pp{
          width: 80px;
          height: 80px;
          border-radius: 50px;
      }
      span{
          display: flex;
          flex-direction: column;
          margin: auto 10px;
          p{
              padding-left: 8px;
              color: #646464;
              font-size: 1.2em;
          }
          p.status{
            color: #49F945;
            display: flex;
            font-size: 0.9em;
            div{
              width: 10px;
              height: 10px;
              border-radius: 5px;
              background: #49F945;
              padding: 0;
              margin: auto 0;
              margin-right: 5px;
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
`;
