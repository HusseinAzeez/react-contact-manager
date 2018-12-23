import React, { Component } from 'react';
import Contact from '../components/Contact';

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Xizors',
        email: 'xizors@gmail.com',
        phone: '555-555-5555'
      },
      {
        id: 2,
        name: 'Eraser',
        email: 'eraser@gmail.com',
        phone: '555-555-5555'
      },
      {
        id: 3,
        name: 'Shourd',
        email: 'shourd@gmail.com',
        phone: '555-555-5555'
      },
      {
        id: 4,
        name: 'Graves',
        email: 'graves@gmail.com',
        phone: '555-555-5555'
      },
      {
        id: 5,
        name: 'Draven',
        email: 'draven@gmail.com',
        phone: '556-551-5555'
      }
    ]
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(element => (
          <Contact key={element.id} contact={element} />
        ))}
      </div>
    );
  }
}

export default Contacts;
