import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Content } from './styles';
import Modal from '../Modal';
import { AlertText } from '../../styles/styles';

export default function PaymentModal() {
  const [keyModal] = useState(2);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  const openState = useSelector(
    state => state.modal.filter(sm => sm.key === keyModal)[0]
  );
  const courseData = useSelector(state => state.course);

  useEffect(() => {
    console.log('dtaaaa', courseData);
    if (courseData) setData(courseData[0].course);
  }, [courseData]);

  useEffect(() => {
    console.log('state que eu quero pagamento', openState);
    if (openState) {
      setOpen(openState.open);
    } else {
      setOpen(false);
    }
  }, [openState]);

  if (!data) {
    return (
      <Modal title="Opção de pagamento" open={open}>
        <Content>
          <div className="course-box">
            <AlertText>Carregando</AlertText>
          </div>
        </Content>
      </Modal>
    );
  }

  return (
    <Modal title="Opção de pagamento" open={open}>
      <Content>
        <div className="course-box">
          {console.log('data', data , data.paymentOptions)}

          <div className="course-single">
            <div className="content">
              <div className="text">12x COM JUROS DE 0.00% AO MÊS</div>
              <div className="value">12x R$ 203,27</div>
            </div>
          </div>
          <div className="course-single">
            <div className="content">
              <div className="text">12x COM JUROS DE 0.00% AO MÊS</div>
              <div className="value">12x R$ 203,27</div>
            </div>
          </div>
          <div className="course-single">
            <div className="content">
              <div className="text">12x COM JUROS DE 0.00% AO MÊS</div>
              <div className="value">12x R$ 203,27</div>
            </div>
          </div>
          <div className="course-single">
            <div className="content">
              <div className="text">12x COM JUROS DE 0.00% AO MÊS</div>
              <div className="value">12x R$ 203,27</div>
            </div>
          </div>
          <div className="course-single">
            <div className="content">
              <div className="text">12x COM JUROS DE 0.00% AO MÊS</div>
              <div className="value">12x R$ 203,27</div>
            </div>
          </div>
          <div className="course-single">
            <div className="content">
              <div className="text">12x COM JUROS DE 0.00% AO MÊS</div>
              <div className="value">12x R$ 203,27</div>
            </div>
          </div>
        </div>
      </Content>
    </Modal>
  );
}
