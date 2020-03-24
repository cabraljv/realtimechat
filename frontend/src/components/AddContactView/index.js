import React from 'react';

import { Container } from './styles';
import add_contact from '../../assets/icons/add_contact_blue.svg'
import plus_icon from '../../assets/icons/plus .svg'

export default function AddContactView({onCloseModal, show}) {
  return (
    <>
      {
        show ? (
          <Container>
              <section>
                  <header>
                      <img src={add_contact} alt="add contact" />
                      <p>Adicionar Contato</p>
                  </header>
                  <input placeholder="Username..." />
                  <button onClick={()=>onCloseModal()}><img src={plus_icon} alt="add" /></button>
                  
              </section>
          </Container>
        ):(<div></div>)
      }
      
    </>
  );
}
