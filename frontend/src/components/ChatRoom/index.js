import React,{useState,useEffect} from 'react';

import { Container,Content } from './styles';
import send from '../../assets/icons/send.svg';
import api from '../../services/api';
import io from 'socket.io-client';

export default function ChatRoom({chat}) {
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [status, setStatus] = useState(true);
    const [chatContent,setChatContent] = useState([]);
    const [menssage,setMenssage] = useState('');
    const [scrollRef, setScrollRef] = useState();

    const registertoSocket = () => {
        const token = localStorage.getItem('@token');
        const socket = io('http://191.242.97.194:3333',{
            query: {
                token,
            }
        });
        socket.on('menssage', newMenssage => {
            setChatContent([...chatContent, newMenssage]);
        })
      }

    useEffect(()=>{
        if(chatContent.length>0){
            scrollRef.scrollTop = scrollRef.scrollHeight;
        }
        
    },[chatContent, scrollRef])
    useEffect(()=>{
        const token = localStorage.getItem('@token');
        if(chat!==''){
            const getProfile = async()=>{
                const api_response = await api.get(`/user/${chat}`,{ headers: { authorization: token } });
                const {status, response} = api_response.data;
                setName(response.username);
                setAvatar(response.avatar);     
                setStatus(response.status);
                
            }
            const getChat = async()=>{
                const api_response = await api.get(`/menssages?receiverId=${chat}`,{ headers: { authorization: token } });
                const {status, response} = api_response.data;
                if(status===200){
                    setChatContent(response);
                }
            }
            
            getProfile();
            getChat();
            if(chat!==''){
                registertoSocket();
            }
            
        }
        
    },[chat])
    useEffect(()=>{
        registertoSocket();
    },[chatContent])
    const onSendMenssage = async ()=>{
        const token = localStorage.getItem('@token');
        if(menssage!==''){
            setMenssage('')
            const api_response = await api.post(`/menssages/send`,
            { 
                content: menssage,
                receiverId: chat   
            }, {headers: { authorization: token, 'content-type': 'application/json' }});

            const {status,response} = api_response.data;
            
        }
    }

    return (
        <Container>
            {
                name ? <>
                    <header>
                        <img  src={avatar} alt="contact pic"/>
                        <div>
                            <p>{name}</p>
                        <span className="online"><div></div><p>Online</p></span>
                        </div>
                    </header>
                    <Content ref={el=>setScrollRef(el)}>
                        {
                            chatContent.map((item,index)=>(
                                item.receiver===chat ? 
                                <div className={item.sender===chat ? 'received':'send'} key={index}>
                                    <p>{item.content}</p>
                                </div>:
                                <p></p>
                            ))
                        }
                        
                    </Content>
                    <footer>
                        <div>
                            <input placeholder="Digite alguma coisa..." 
                                value={menssage} 
                                onChange={text=>setMenssage(text.target.value)} 
                                onKeyDown={key=>{if(key.key==='Enter'){onSendMenssage()}}}
                            />
                            <button onClick={onSendMenssage} ><img src={send} alt="send"/></button>
                        </div>
                        
                    </footer>
                </>: <div></div>
            }
            
            
        </Container>
    );
}
