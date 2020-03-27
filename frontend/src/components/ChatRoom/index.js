import React,{useState,useEffect} from 'react';

import { Container,Content } from './styles';
import send from '../../assets/icons/send.svg';
import api from '../../services/api';


export default function ChatRoom({chat,socket}) {
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [chatContent,setChatContent] = useState([]);
    const [message,setMessage] = useState('');
    const [scrollRef, setScrollRef] = useState();
    const [status, setStatus] = useState(true);


    useEffect(()=>{
        if(chatContent.length>0 && chat!==''){
            try{
                scrollRef.scrollTop = scrollRef.scrollHeight;
            }catch(error){

            }    
        }
        
    },[chatContent, scrollRef, chat])
    useEffect(()=>{
        const token = localStorage.getItem('@token');
        if(chat!==''){
            const getProfile = async()=>{
                const api_response = await api.get(`/user/${chat}`,{ headers: { authorization: token } });
                const {status, response} = api_response.data;
                if(status===200){
                    setName(response.username);
                    setAvatar(response.avatar); 
                    setStatus(response.status);  
                }else{
                    console.log(response)
                }
                
                
            }
            const getChat = async()=>{
                const api_response = await api.get(`/messages?receiverId=${chat}`,{ headers: { authorization: token } });
                const {status, response} = api_response.data;
                if(status===200){
                    setChatContent(response);
                }
            }
            
            getProfile();
            getChat();

            
        }
        
    },[chat])

    useEffect(()=>{
        if(chat!==''){
            socket.on('message', newMessage => {
                setChatContent([...chatContent, newMessage]);
            })
        }
    },[chatContent, socket, chat])
    const onSendMessage = async ()=>{
        const token = localStorage.getItem('@token');
        if(message!==''){
            setMessage('')
            const api_response = await api.post(`/messages/send`,
            { 
                content: message,
                receiverId: chat   
            }, {headers: { authorization: token, 'content-type': 'application/json' }});

            const {status,response} = api_response.data;
            if(status!==200){
                console.log(response);
            }
            
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
                            {
                                status ? (
                                <span className="online">
                                    <div></div>
                                    <p>Online</p>
                                </span>
                                ): (
                                    <span className="offline">
                                    <div></div>
                                    <p>Offline</p>
                                    </span>
                                )
                            }
                        </div>
                    </header>
                    <Content ref={el=>setScrollRef(el)}>
                        {
                            chatContent.map((item,index)=>(
                                (item.receiver===chat || item.sender===chat) ? 
                                <div className={item.sender===chat ? 'received':'send'} key={index}>
                                    <p>{item.content}</p>
                                </div>:<p></p>
                            ))
                        }
                        
                    </Content>
                    <footer>
                        <div>
                            <input placeholder="Digite alguma coisa..." 
                                value={message} 
                                onChange={text=>setMessage(text.target.value)} 
                                onKeyDown={key=>{if(key.key==='Enter'){onSendMessage()}}}
                            />
                            <button onClick={onSendMessage} ><img src={send} alt="send"/></button>
                        </div>
                        
                    </footer>
                </>: <div></div>
            }
            
            
        </Container>
    );
}
