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
      name: 'mark0374',
      status: true,
      pp: 'https://api.adorable.io/avatars/285/realtimec2hat2@adorable.io.png'
    },
    {
      name: 'mark0374',
      status: false,
      pp: 'https://api.adorable.io/avatars/285/realtim5echat2@adorable.io.png'
    },
    {
      name: 'mark0374',
      status: true,
      pp: 'https://api.adorable.io/avatars/285/realt4imechat2@adorable.io.png'
    },
    {
      name: 'mark0374',
      status: false,
      pp: 'https://api.adorable.io/avatars/285/realtime3chat2@adorable.io.png'
    },
    {
      name: 'mark0374',
      status: true,
      pp: 'https://api.adorable.io/avatars/285/realtimechat22@adorable.io.png'
    },
    {
      name: 'mark0374',
      status: false,
      pp: 'https://api.adorable.io/avatars/285/realtimech3at2@adorable.io.png'
    },
  ]
}

export default function ContactsBar() {
  return (
    <Container>
        <header>
            <img className="pp" src={data.user.pp} alt="profile pic"/>
            <div id="user">
                <p>{data.user.name}</p>
                <span><div id="ball"></div><p className="status">Online</p></span>
            </div>
            <img className="exit" src={logout} alt="logout"/>
        </header>
        <section id="contacts">
            {
              data.contacts.map((item,index)=>
                <Contact key={index} data={item} />
              )
            }
        </section>
        <section id="add-contact">
          <div>
            <img src={add_icon} alt="add contact"/>
            <p>Adicionar Contato</p>
          </div>  
        </section>
    </Container>
  );
}
