import React from 'react';

import { Container, Content } from './styles';

export default function BoxCourse({ width }) {
  return (
    <Container widthSize={width}>
      <Content>
        <div className="row">
          <div className="name">Escola escolhida:</div>
          <div className="text">Gama Academy</div>
        </div>
        <div className="row">
          <div className="name">Curso:</div>
          <div className="text">Desenvolvimento Front-end</div>
        </div>
        <div className="row">
          <div className="name">Duração:</div>
          <div className="text">5 semanas / Part-time</div>
        </div>
        <div className="row">
          <div className="name">Opção desejada:</div>
          <div className="text">18x com juros de 0.89% ao mês</div>
        </div>
      </Content>
    </Container>
  );
}
