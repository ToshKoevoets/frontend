import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Spinner as AscSpinner } from '@datapunt/asc-assets';
import { themeColor } from '@datapunt/asc-ui';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinning = styled(AscSpinner)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  fill: ${({ color }) => color || themeColor('secondary')};
  width: 100px;
  height: 100px;

  & > * {
    transform-origin: 50% 50%;
    animation: ${rotate} 2s linear infinite;
  }
`;

const Spinner = props => <Spinning data-testid="spinner" {...props} />;

export default Spinner;
