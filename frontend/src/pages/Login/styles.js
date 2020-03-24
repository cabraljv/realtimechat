import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(to right, #449DD1 , #8EC4E3);
    display: flex;
    overflow-y: hidden;
`;
export const Campo = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    position: relative;
    margin: 10px auto;
    margin-bottom: 30px;
    input{
        
        height: 50px;
        padding-left: 10px;
        border-radius: 5px;
        border: 2px solid #D9D9D9;
        font-size: 16px;
        color:#1f1f1f;
        
    }
    input:focus{
        outline: none;
        border: 2px solid #449DD1;

    }
    label{
        font-size: 18px;
        position: absolute;
        top: 14px;
        left: 10px;
        color: #D9D9D9;
        transition: .5s ease;
    }
    
    input:not(:placeholder-shown) + label{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        transform-origin: left bottom;
        transform: translate(0,-0.8rem);
        font-size: 0.8em;
        color: #D9D9D9;
    }
    input:focus + label, 
    input:active + label{

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        transform-origin: left bottom;
        transform: translate(0,-0.8rem);
        font-size: 0.8em;
        color: #449DD1;
    }
    
    
`;

export const Content = styled.div`
    
    max-width: 700px;
    width: 40%;
    min-width: 350px;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    box-shadow: 4px 4px 10px rgba(255,255,255,0.25);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    form{
        display: flex;
        flex-direction: column;
        button{
            border: none;
            background: #449DD1;
            width: 80%;
            margin: 10px auto;
            margin-bottom: 20px;
            border-radius: 10px;
            height: 50px;
            box-shadow: 4px 4px 10px rgba(68,157,209,0.4);
            p{
                color: #fff;
                font-weight: bold;
                font-size: 1.1em;
                letter-spacing: 0.5ch;      
            }  
            cursor: pointer;
            transition: 0.3s ease;
        }
        button:focus{
            outline: none;
        }
        button:hover{
            background: #55a2cf;
            box-shadow: 4px 4px 15px rgba(68,157,209,0.6);
        }
        a{
            text-decoration: none;
            color: #787878;
            font-size: 0.9em;
            margin: auto;
            margin-bottom: 20px;
        }
    }
    span{
        display: flex;
        align-content: space-between;
        margin: 10px auto;
        padding-top: 40px;
        width: 80%;
        
        @media (max-width: 500px){
            img{
                width:30px;
                
            }
            h1{
                margin: auto 10px;
                font-weight: normal;
                color: #449DD1;
                font-size: 10px;
            }
        
        }
        @media (max-width: 768px){
            img{
            width:40px;
            }
            h1{
                margin: auto 10px;
                font-weight: normal;
                color: #449DD1;
                font-size: 28px;
            }
        
        }
        @media (max-width: 900px){
            img{
            width:60px;
            }
            h1{
                margin: auto 10px;
                font-weight: normal;
                color: #449DD1;
                font-size: 32px;
            }
        
        }
        @media (min-width: 900px){
            img{
            width:100px;
            }
            h1{
                margin: auto 10px;
                font-weight: normal;
                color: #449DD1;
                font-size: 36px;
            }
        
        }
        img{
            margin-left: auto;
            padding: 15px;
        }
        h1{
            margin-right: auto;
            
        }
        
        
        
    }
`;
