import React from 'react';
import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import * as ModalActions from '../../store/modules/modal/actions';

import { Container, Background } from './styles';
import { Title } from '../../styles/styles';

export default function Modal({ children, title, key, open }) {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(ModalActions.closeModal(key));
  };

  return (
    <Background open={open}>
      <Container>
        <div className="header">
          <Title size={24} weight={500}>
            {title}
          </Title>
          <button type="button" onClick={closeModal}>
            <MdClose size={18} color="#212121" />
          </button>
        </div>
        {children}
      </Container>
    </Background>
  );
}
