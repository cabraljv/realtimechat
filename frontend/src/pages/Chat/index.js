import React,{useState} from 'react';

import { Container } from './styles';
import ContactsBar from '../../components/ContactsBar';
import ChatRoom from '../../components/ChatRoom';
import AddContactView from '../../components/AddContactView';

export default function Chat() {
  const [currentChat, setCurrentChat] = useState();
  const [addContact, setAddContact] = useState(false)
  return (
    <Container>
      <ContactsBar onChangeChat={(chat)=>setCurrentChat(chat)} onAddContact={()=>setAddContact(true)} />
      <ChatRoom chat={currentChat} />
      <AddContactView show={addContact} onCloseModal={()=>setAddContact(false)}/>
    </Container>
  );
}
