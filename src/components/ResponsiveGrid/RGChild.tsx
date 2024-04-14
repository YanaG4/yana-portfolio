import React, { useContext } from 'react';
import styled from 'styled-components';
import { OrderContext } from './Context';

interface StyledChildProps {
  index: number;
  children: React.ReactNode;
}

const Child = styled.div<{ order: number; span: number }>`
  order: ${({ order }) => order};
  grid-column: ${({ span }) => `span ${span}`};
  grid-row: ${({ span }) => `span ${span}`};
`;

export const StyledChild: React.FC<StyledChildProps> = ({ index, children }) => {
  const { getOrder, activeIndex } = useContext(OrderContext);
  const order = getOrder(index);
  const span = activeIndex === index ? 2 : 1;

  return <Child order={order} span={span}>{children}</Child>;
};
