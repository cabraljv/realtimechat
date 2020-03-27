import React from 'react';
import { Container,UserRequest } from './styles';
import logout from '../../assets/icons/logout.svg';
import Contact from '../Contact';
import add_icon from '../../assets/icons/add_contact.svg';
import accept_icon from '../../assets/icons/accept.svg';
import api from '../../services/api';

export default function ContactsBar({onChangeChat, onAddContact, history, userData,showAlert, onAccept}) {

  const onLogout = ()=>{
    localStorage.removeItem('@token');
    history.push(`/`);
  
  }
  const onAcceptRequest = async(id)=>{
    const token = localStorage.getItem('@token');
    const response_api = await api.get(`/friend/accept?target=${id}`,{ headers: { authorization: token } });
    const {status, response} = response_api.data;
    if(status===200){
      onAccept();
      showAlert('success','Pedido aceito com sucesso');
    }else{
      showAlert('error',response);
    }
  }
  return (
    <Container>
        <header>
            <img className="pp" src={userData.avatar} alt="profile pic"/>
            <div id="user">
                <p>{userData.username}</p>
                <span><div id="ball"></div><p className="status">Online</p></span>
            </div>
            
            
        </header>
        <section id="contacts">
            {
    
              userData.friends.map((item)=>
                <div onClick={()=> onChangeChat(item.id)} key={item.id} >
                  <Contact data={item} />
                </div>
                
              )
            }
            {
              userData.friendsRequestRecived.length>0 ? (
                <section id="requests">
                  <section>
                    <div >
                      <img src={add_icon} alt="icon"/>
                      <p>Solicitações de amizade</p>
                    </div>   
                  </section>
                  {
                    userData.friendsRequestRecived.map(item=>(
                      <UserRequest key={item.id}>
                        <img src={item.profile_pic} alt="icon"/>
                        <p>{item.username}</p>
                        <button onClick={async ()=>await onAcceptRequest(item.id)}><img src={accept_icon} alt='button'/></button>
                      </UserRequest>
                    ))
                  }
                </section>
              ):<div></div>
            }
            
        </section>
        
        <section id="add-contact">
          <div onClick={()=> onAddContact()} >
            <img src={add_icon} alt="add contact"/>
            <p>Adicionar Contato</p>
          </div>  
          <a href="login" onClick={onLogout}><img className="exit" src={logout} alt="logout"/></a>
        </section>
    </Container>
  );
}
