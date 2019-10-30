/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as ModalActions from '../../store/modules/modal/actions';

import { Container, Content } from './styles';

export default function BoxCourse({ width }) {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const courseData = useSelector(state => state.course);

  function openModal(id) {
    dispatch(ModalActions.openModal(id));
  }

  useEffect(() => {
    setData(courseData[0]);
  }, courseData);

  if (!data.loan) {
    return (
      <Container widthSize={width} key="2">
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
    <Container widthSize={width} key="2">
      <Content>
        <div className="row">
          <div className="name">Escola escolhida:</div>
          <div className="text">{data.loan.schoolName}</div>
        </div>
        <div className="row row-button">
          <div className="name">Curso:</div>
          <div className="text">{data.course.courseName}</div>
          <button type="button" onClick={() => openModal(1)}>
            Alterar opção de curso
          </button>
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
          <button type="button" onClick={() => openModal(2)}>
            Alterar opção desejada
          </button>
        </div>
      </Content>
    </Container>
  );
}
