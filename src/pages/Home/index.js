import React from 'react';

import Aside from '../../components/Aside';

import { Container, Content } from './styles';

export default function Home() {
  return (
    <Container>
      <Aside />
      <Content>
        <h1>Content</h1>
      </Content>
    </Container>
  );
}
