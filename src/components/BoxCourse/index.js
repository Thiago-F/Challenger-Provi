/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Container, Content } from './styles';

export default function BoxCourse({ width, data }) {
  const stateData = useSelector(state => state.course)[0];

  useEffect(() => {
    console.log('res', stateData);
  }, [stateData]);

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
