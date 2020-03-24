import React from 'react';

import { Container } from './styles';
import logout from '../../assets/icons/logout.svg';
import Contact from '../Contact';
import add_icon from '../../assets/icons/add_contact.svg';

const data = {
  user:{
    name: 'UnknownNTC',
    status: true,
    pp: 'https://api.adorable.io/avatars/285/realtimechat@adorable.io.png'
  },
  contacts:[
    {
      id: 1237,
      name: 'mark0374',
      status: true,
      pp: 'https://api.adorable.io/avatars/285/realtimec2hat2@adorable.io.png'
    },
    {
      id: 1236,
      name: 'mark0374',
      status: false,
      pp: 'https://api.adorable.io/avatars/285/realtim5echat2@adorable.io.png'
    },
    {
      id: 1235,
      name: 'mark0374',
      status: true,
      pp: 'https://api.adorable.io/avatars/285/realt4imechat2@adorable.io.png'
    },
    {
      id: 1234,
      name: 'mark0374',
      status: false,
      pp: 'https://api.adorable.io/avatars/285/realtime3chat2@adorable.io.png'
    },
    {
      id: 1233,
      name: 'mark0374',
      status: true,
      pp: 'https://api.adorable.io/avatars/285/realtimechat22@adorable.io.png'
    },
    {
      id: 1232,
      name: 'mark0374',
      status: false,
      pp: 'https://api.adorable.io/avatars/285/realtimech3at2@adorable.io.png'
    },
  ]
}

export default function ContactsBar({onChangeChat, onAddContact}) {
  return (
    <Container>
        <header>
            <img className="pp" src={data.user.pp} alt="profile pic"/>
            <div id="user">
                <p>{data.user.name}</p>
                <span><div id="ball"></div><p className="status">Online</p></span>
            </div>
            
            
        </header>
        <section id="contacts">
            {
              data.contacts.map((item)=>
                <div onClick={()=> onChangeChat(item.id)} key={item.id} >
                  <Contact data={item} />
                </div>
                
              )
            }
        </section>
        <section id="add-contact">
          <div onClick={()=> onAddContact()} >
            <img src={add_icon} alt="add contact"/>
            <p>Adicionar Contato</p>
          </div>  
          <a href="login"><img className="exit" src={logout} alt="logout"/></a>
        </section>
    </Container>
  );
}
