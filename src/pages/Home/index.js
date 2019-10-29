import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import * as courseActions from '../../store/modules/course/action';

import api from '../../services/api';

import Aside from '../../components/Aside';

import { Container, Content } from './styles';
import BoxInformation from '../../components/BoxInformation';
import BoxCourse from '../../components/BoxCourse';
import CourseModal from '../../components/CourseModal';
import PaymentModal from '../../components/PaymentModal';

export default function Home() {
  const dispatch = useDispatch();
  const [loans, setLoans] = useState({
    loan: '',
    course: '',
    actuallyPartial: '',
  });

  useEffect(() => {
    const getData = async () => {
      const response = await api.get('/loans');

      const activeLoans = response.data.filter(res => res.active === true)[0];
      const activeCourse = activeLoans.courses.filter(
        al => al.active === true
      )[0];
      const activePartial = activeCourse.paymentOptions.filter(
        po => po.active === true
      )[0];

      const data = {
        loan: activeLoans,
        course: activeCourse,
        actuallyPartial: activePartial,
      };

      dispatch(courseActions.addCourse(data));
      setLoans(data);
    };
    getData();
  }, []);

  const totalValue = {
    value: loans.course.courseValue,
    text: 'Valor total',
    widget: 'O valor total do emprestimo',
  };
  const monthlyInterest = {
    value: loans.actuallyPartial.fees,
    text: 'Taxa de juros a.m',
    widget: 'A taxa atual do seu plano %a.m',
  };
  const actuallyParcel = {
    value: loans.actuallyPartial.partialMonth,
    text: 'Parcela Atual',
    widget: 'Parcela atual',
  };
  const TotalParcel = {
    value: `${loans.actuallyPartial.partials}x`,
    text: 'Total de Parcelas',
    widget: 'Parcela atual',
  };

  return (
    <Container>
      <Aside />
      <Content>
        <div className="box-container">
          <BoxInformation width="25%" data={totalValue} />
          <BoxInformation width="25%" data={monthlyInterest} />
          <BoxInformation width="25%" data={actuallyParcel} />
          <BoxInformation width="25%" data={TotalParcel} />
        </div>
        <div className="info-section">
          <BoxCourse width="100%" />
        </div>
      </Content>
      {/* <CourseModal data /> */}
      {/* <PaymentModal data /> */}
    </Container>
  );
}
