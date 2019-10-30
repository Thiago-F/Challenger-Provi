import React from 'react';

import { FaUserAlt, FaHome, FaMoneyBillWave } from 'react-icons/fa';
import { AiFillTool } from 'react-icons/ai';
import { Container } from './styles';

export default function Aside() {
  return (
    <Container>
      <header>
        <div className="user">
          <div className="user-avatar">
            <FaUserAlt size={26} color="#212121" />
          </div>
        </div>
        <div className="user-name">Thiago Fialho</div>
      </header>

      <div className="content">
        <div className="item">
          <div className="icon">
            <FaHome size={18} color="#fafafa" />
          </div>
          <div className="text">Inicio</div>
        </div>
        <div className="item">
          <div className="icon">
            <FaMoneyBillWave size={18} color="#fafafa" />
          </div>
          <div className="text">Emprestimos</div>
        </div>
        <div className="item">
          <div className="icon">
            <AiFillTool size={18} color="#fafafa" />
          </div>
          <div className="text">Configurações</div>
        </div>
      </div>
      <div className="logout">Sair</div>
    </Container>
  );
}
