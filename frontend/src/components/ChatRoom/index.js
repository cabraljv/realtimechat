import React from 'react';

import { Container,Content } from './styles';
import send from '../../assets/icons/send.svg'

export default function ChatRoom({chat}) {
  return (
    <Container>
        <header>
            <img  src={"https://api.adorable.io/avatars/285/realtime3chat2@adorable.io.png"} alt="contact pic"/>
            <div>
                <p>mark63542</p>
                <span className="online"><div></div><p>Online</p></span>
            </div>
        </header>
        <Content>
            <div className="recived">
                <p>HKJAHSXKJASXAS</p>
                <div></div>
            </div>
            <div className="send">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                <div></div>
            </div>
            <div className="send">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                <div></div>
            </div>
            <div className="send">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                <div></div>
            </div>
            <div className="recived">
                <p>HKJAHSXKJASXAS</p>
                <div></div>
            </div>
            <div className="send">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                <div></div>
            </div>
        </Content>
        <footer>
            <div>
                <input placeholder="Digite alguma coisa..."/>
                <button><img src={send} alt="send"/></button>
            </div>
            
        </footer>
    </Container>
  );
}
