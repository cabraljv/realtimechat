import React,{useState,useEffect} from 'react';

import { Container,Content,Campo } from './styles';
import logo from '../../assets/images/logo.svg'
import api from '../../services/api'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import ScaleLoader from "react-spinners/ScaleLoader";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Login({history}) {
  const [username, setUsername] = useState('');
  const [passwd, setPasswd] = useState('');
  const [alertOpen, setAlertOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [erroMenssage, setErroMenssage] = useState('')

  useEffect(()=>{
    const token = localStorage.getItem('@token');
    if(token){
      history.push(`/`);
    }
  },[])

  const onSingin = async()=>{
    setLoading(true);
    if(username===''){
      setErroMenssage('Username inválido');
      setAlertOpen(true);
    }else if(passwd===''){
      setErroMenssage('Senha inválida');
      setAlertOpen(true);
    }else{
      setAlertOpen(false);
      const api_response = await api.post('/user/login',{ username, passwd});
      const {status, response} = api_response.data;
      if(status===202){
        localStorage.setItem('@token', response);
        history.push(`/`);
      }else{
        setErroMenssage('Usuário ou senha inválidos');
        setAlertOpen(true);
      }
    }
    setLoading(false);
  }

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlertOpen(false);
  };
  return (
    <Container >
        <Content>
              <span>
                <img src={logo} alt="logo"/>
                <h1>Real Time Chat</h1>
              </span>
            <form>
              <Campo>  
                <input id="username" placeholder=" " onChange={text=>setUsername(text.target.value)}/>
                <label htmlFor="username">Username</label>
              </Campo>
              <Campo>       
                <input id="passwd" type="password"  placeholder=" " onChange={text=>setPasswd(text.target.value)}/>
                <label htmlFor="passwd"  >Senha</label>
              </Campo>
              <button type="button" onClick={onSingin} >
                {
                  loading ? (
                    <ScaleLoader
                      height={25}
                      color={"#fff"}
                      loading
                    />
                  ):(
                    <p>ENTRAR</p>
                  )
                }
              </button>
              <a href="cadastro">Não tem conta? Cadastre-se</a>
            </form>
            
        </Content>
        <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleCloseAlert}>
          <Alert onClose={handleCloseAlert} severity="error">
            {erroMenssage}
          </Alert>
        </Snackbar>
    </Container>
  );
}
