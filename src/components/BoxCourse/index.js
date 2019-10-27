import React from 'react';

import { Container, Content } from './styles';

export default function BoxCourse({ width }) {
  return (
    <Container widthSize={width}>
      <Content>
        <h1>Course 20</h1>
      </Content>
    </Container>
  );
}
