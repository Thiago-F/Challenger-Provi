/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';

import { Container, Content } from './styles';

export default function BoxCourse({ width }) {
  const data = useSelector(state => state.course);

  if (!data.loan) {
    return (
      <Container widthSize={width}>
        <Content>
          <div className="row">
            <div className="name">Escola escolhida:</div>
            <div className="text">--</div>
          </div>
          <div className="row row-button">
            <div className="name">Curso:</div>
            <div className="text">--</div>
            <button type="button">Alterar opção de curso</button>
          </div>
          <div className="row">
            <div className="name">Duração:</div>
            <div className="text">-- / --</div>
          </div>
          <div className="row row-button">
            <div>
              <div className="name">Opção desejada:</div>
              <div className="text">--x com juros de --% ao mês</div>
            </div>
            <button type="button">Alterar opção desejada</button>
          </div>
        </Content>
      </Container>
    );
  }

  return (
    <Container widthSize={width}>
      <Content>
        <div className="row">
          <div className="name">Escola escolhida:</div>
          <div className="text">{data.loan.schoolName}</div>
        </div>
        <div className="row row-button">
          <div className="name">Curso:</div>
          <div className="text">{data.course.courseName}</div>
          <button type="button">Alterar opção de curso</button>
        </div>
        <div className="row">
          <div className="name">Duração:</div>
          <div className="text">
            {data.course.courseDuration} / {data.course.courseTime}
          </div>
        </div>
        <div className="row row-button">
          <div>
            <div className="name">Opção desejada:</div>
            <div className="text">
              {data.actuallyPartial.partials}x com juros de{' '}
              {data.actuallyPartial.fees}% ao mês
            </div>
          </div>
          <button type="button">Alterar opção desejada</button>
        </div>
      </Content>
    </Container>
  );
}
