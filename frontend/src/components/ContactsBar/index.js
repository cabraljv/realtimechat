import React from 'react';

import { Container } from './styles';
import pp from '../../assets/images/pp.jpg'
import logout from '../../assets/icons/logout.svg'

export default function ContactsBar() {
  return (
    <Container>
        <header>
            <img className="pp" src={pp}/>
            <span>
                <p>Unknown</p>
                <p className="status"><div></div>Online</p>
            </span>
            <img className="exit" src={logout} />
        </header>
        <section>
            
        </section>
    </Container>
  );
}
