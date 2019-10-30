import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Content } from './styles';
import Modal from '../Modal';

export default function PaymentModal() {
  const [keyModal] = useState(2);
  const [open, setOpen] = useState(false);

  const openState = useSelector(
    state => state.modal.filter(sm => sm.key === keyModal)[0]
  );

  useEffect(() => {
    console.log('state que eu quero pagamento', openState);
    if (openState) {
      setOpen(openState.open);
    } else {
      setOpen(false);
    }
  }, [openState]);

  return (
    <Modal title="Opção de pagamento" open={open}>
      <Content>
        <div className="course-box">
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
