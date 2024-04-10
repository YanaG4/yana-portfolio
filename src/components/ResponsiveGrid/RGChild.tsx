import React, { useContext } from 'react';
import styled from 'styled-components';
import { OrderContext } from './Context';

interface StyledChildProps {
  index: number;
  children: React.ReactNode;
}

export const StyledChild: React.FC<StyledChildProps> = ({ index, children }) => {
  const { getOrder, activeIndex } = useContext(OrderContext);

  const Child = styled.div`
    order: ${getOrder(index)};
    grid-column: ${activeIndex === index ? 'span 2' : 'span 1'};
    grid-row: ${activeIndex === index ? 'span 2' : 'span 1'};
  `;

  return <Child>{children}</Child>;
};
