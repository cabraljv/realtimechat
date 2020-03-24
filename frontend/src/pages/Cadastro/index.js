import React from 'react';

import { Container,Content,Campo } from './styles';
import logo from '../../assets/images/logo.svg'

export default function Cadastro() {
  return (
    <Container >
        <Content>
              <span>
                <img src={logo} alt="logo"/>
                <h1>Real Time Chat</h1>
              </span>
            
            <form >
              <Campo>  
                <input id="username" placeholder=" "/>
                <label for="username">Username</label>
              </Campo>
              
              <Campo>       
                <input id="passwd" type="password"  placeholder=" "/>
                <label for="passwd"  >Senha</label>
              </Campo>
              <Campo>       
                <input id="reppasswd" type="password"  placeholder=" "/>
                <label for="reppasswd"  >Repita sua senha</label>
              </Campo>
              <button type="button"><p>CADASTRAR</p></button>
              <a href="login">Já tem uma conta? Login</a>
            </form>
        </Content>
    </Container>
  );
}
