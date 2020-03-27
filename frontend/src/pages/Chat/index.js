import React,{useState,useEffect} from 'react';

import { Container } from './styles';
import ContactsBar from '../../components/ContactsBar';
import ChatRoom from '../../components/ChatRoom';
import AddContactView from '../../components/AddContactView';
import api from '../../services/api'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Chat({history}) {
  const [currentChat, setCurrentChat] = useState('');
  const [addContact, setAddContact] = useState(false);
  const [userData,setUserData] = useState();
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMenssage, setAlertMenssage] = useState('')
  const [alertType,setAlertType] = useState('success')


  
  useEffect(()=>{
    const token = localStorage.getItem('@token');
    if(!token){
      history.push(`/login`);
    }
    const getInfo = async()=>{
      const api_response = await api.get('/user',{ headers: { authorization: token } });
      const {status, response} = api_response.data;
      if(status===200){
        setUserData(response);
      }
    }
    getInfo();
  },[])
  
  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlertOpen(false);
  };
  const showAlert = (type,menssage)=>{
    setAlertType(type);
    setAlertMenssage(menssage);
    setAlertOpen(true);
  }

  const onCloseModal = (cod,menssage)=>{
    if(cod===0){
      setAddContact(false)
    }
    if(cod===1){
      setAlertType('sucess')
    }else{
      setAlertType('error')
    }
    setAlertMenssage(menssage);
    setAlertOpen(true);
    setAddContact(false)

  }
  return (
    <Container>
      {
        userData ? (
          <> 
            <ContactsBar 
              showAlert={showAlert}
              onChangeChat={(chat)=>setCurrentChat(chat)} 
              userData={userData} history={history} 
              onAddContact={()=>setAddContact(true)} />
            <ChatRoom chat={currentChat} />
            <AddContactView show={addContact} onCloseModal={onCloseModal}/>
          </>
        ): <div></div>
      }
      <Snackbar open={alertOpen} autoHideDuration={1000} onClose={handleCloseAlert}>
          <Alert onClose={handleCloseAlert} severity={alertType}>
            {alertMenssage}
          </Alert>
      </Snackbar>
    </Container>
  );
}
