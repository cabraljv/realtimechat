import React from 'react';

import { Container,Content,Campo } from './styles';
import logo from '../../assets/images/logo.svg'

export default function Login() {
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
              <button type="button"><p>ENTRAR</p></button>
              <a href="cadastro">Não tem conta? Cadastre-se</a>
            </form>
        </Content>
    </Container>
  );
}
