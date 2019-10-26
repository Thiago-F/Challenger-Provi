import React from 'react';

import { Container } from './styles';

export default function Aside() {
  return (
    <Container>
      <div className="toggle">X</div>
      <header>
        <div className="user">
          <div className="user-avatar" />
        </div>
        <div className="user-name">Thiago Fialho</div>
      </header>
      <div className="content">
        <div className="item">
          <div className="icon">X</div>
          <div className="text">Inicio</div>
        </div>
        <div className="item">
          <div className="icon">X</div>
          <div className="text">Inicio</div>
        </div>
        <div className="item">
          <div className="icon">X</div>
          <div className="text">Inicio</div>
        </div>
      </div>
      <div className="logout">Sair</div>
    </Container>
  );
}
