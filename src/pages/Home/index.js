import React from 'react';

import Aside from '../../components/Aside';

import { Container, Content } from './styles';
import BoxInformation from '../../components/BoxInformation';
import BoxCourse from '../../components/BoxCourse';
import CourseModal from '../../components/CourseModal';
import PaymentModal from '../../components/PaymentModal';

export default function Home() {
  const totalValue = {
    value: 'R$ 10.000,00',
    text: 'Valor total',
    widget: 'O valor total do emprestimo',
  };
  const monthlyInterest = {
    value: '2%',
    text: 'Taxa de juros a.m',
    widget: 'A taxa atual do seu plano %a.m',
  };
  const actuallyParcel = {
    value: 'R$ 500,00',
    text: 'Parcela Atual',
    widget: 'Parcela atual',
  };
  const TotalParcel = {
    value: '10x',
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
