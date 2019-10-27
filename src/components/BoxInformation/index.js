import React from 'react';

import { Container } from './styles';

export default function BoxInformation({ data, width }) {
  return (
    <Container widthSize={width}>
      <div className="value">{data.value}</div>
      <div className="title">{data.text}</div>
    </Container>
  );
}
