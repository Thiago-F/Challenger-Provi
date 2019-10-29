import React from 'react';

import { MdClose } from 'react-icons/md';
import { Container, Background } from './styles';
import { Title } from '../../styles/styles';

export default function Modal({ children, title }) {
  return (
    <Background>
      <Container>
        <div className="header">
          <Title size={24} weight={500}>
            {title}
          </Title>
          <button type="button">
            <MdClose size={18} color="#212121" />
          </button>
        </div>
        {children}
      </Container>
    </Background>
  );
}
