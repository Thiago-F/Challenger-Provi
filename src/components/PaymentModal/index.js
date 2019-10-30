import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as courseActions from '../../store/modules/course/actions';
import * as modalActions from '../../store/modules/modal/actions';

import { Content } from './styles';
import Modal from '../Modal';
import { AlertText } from '../../styles/styles';

export default function PaymentModal() {
  const dispatch = useDispatch();
  const [keyModal] = useState(2);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  const openState = useSelector(
    state => state.modal.filter(sm => sm.key === keyModal)[0]
  );
  const courseData = useSelector(state => state.course);

  useEffect(() => {
    if (courseData) setData(courseData[0].course);
  }, [courseData]);

  useEffect(() => {
    if (openState) {
      setOpen(openState.open);
    } else {
      setOpen(false);
    }
  }, [openState]);

  const handlePayment = pay => {
    const payments = courseData[0].course.paymentOptions;
    payments.map(p => (p.active = false));

    payments.map(pm => {
      if (pm.id === pay.id) {
        pm.active = true;
      }
    });

    courseData[0].course.paymentOptions = payments;
    courseData[0].actuallyPartial = pay;

    dispatch(courseActions.addCourse(courseData[0]));
    dispatch(modalActions.closeModal(2));
  };

  if (data.length === 0) {
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
          {data.paymentOptions.map(pay => (
            <div
              key={pay.id}
              className="course-single"
              onClick={() => handlePayment(pay)}
            >
              <div className="content">
                <div className="text">
                  {pay.partials}x COM JUROS DE {pay.fees}% AO MÊS
                </div>
                <div className="value">
                  {pay.partials}x R$ {pay.partialMonth}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Content>
    </Modal>
  );
}
