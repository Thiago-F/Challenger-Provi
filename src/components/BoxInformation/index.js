import React from 'react';
import propTypes from 'prop-types';

import { Container } from './styles';

export default function BoxInformation({ data, width }) {
  return (
    <Container widthSize={width}>
      <div className="value">{data.value}</div>
      <div className="title">{data.text}</div>
    </Container>
  );
}

BoxInformation.defaultProps = {
  value: '',
  text: '',
};

BoxInformation.propTypes = {
  data: propTypes.any.isRequired,
  value: propTypes.string,
  text: propTypes.string,
  width: propTypes.string.isRequired,
};
