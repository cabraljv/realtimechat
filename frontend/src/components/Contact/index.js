import React from 'react';

import { Container } from './styles';

export default function Contact({data}) {

  return (
    <Container>
        <img src={data.profile_pic} alt="user pic"/>
        <p>{data.username}</p>
        {
          data.status ? (
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
        
    </Container>
  );
}
