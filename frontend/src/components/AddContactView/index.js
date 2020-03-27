import React,{useState} from 'react';

import { Container } from './styles';
import add_contact from '../../assets/icons/add_contact_blue.svg'
import plus_icon from '../../assets/icons/plus .svg'
import api from '../../services/api'

export default function AddContactView({onCloseModal, show}) {
  const token = localStorage.getItem('@token');
  const [name, setName] = useState('');
  const onClickReady = async()=>{
    const response_api = await api.get(`/friend/send?target=${name}`,{ headers: { authorization: token } });
    const {status, response} = response_api.data;
    if(status===200){
      onCloseModal(1,'Pedido enviado');
    }else{
      onCloseModal(2,response);
    }
  }
  return (
    <>
      {
        show ? (
          <Container>
              <div onClick={()=>onCloseModal(0,'')}>
                
              </div>
              <section>
                  <header>
                      <img src={add_contact} alt="add contact" />
                      <p>Adicionar Contato</p>
                  </header>
                  <input placeholder="Username..." onChange={text=>setName(text.target.value)} />
                  <button onClick={onClickReady}><img src={plus_icon} alt="add" /></button>
                  
              </section>
          </Container>
        ):(<div></div>)
      }
      
    </>
  );
}
