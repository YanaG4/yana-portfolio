import React, { useState, useEffect, Children, cloneElement, ReactElement } from 'react';
import styled from 'styled-components';
import { OrderContext, OrderContextType } from './Context';

interface ResponsiveGridProps {
  columnsCountBreakPoints: Record<number, number>;
  activeIndex: number;
  children: React.ReactNode | React.ReactNode[];
}

const getColumnsForWidth = (width: number, breakpoints: Record<number, number>) => {
  let matchedColumns = 1;

  const sortedBreakpoints = Object.keys(breakpoints).map(Number).sort((a, b) => b - a);

  for (let breakpoint of sortedBreakpoints) {
    if (width >= breakpoint) {
      matchedColumns = breakpoints[breakpoint];
      break;
    }
  }
  return matchedColumns;
};

const getOrder = (index: number, grid: number, activeIndex: number): number => {
  if (grid < 2) return index;
  const elementPositionInOrder = activeIndex + 1;
  if (elementPositionInOrder % grid !== 0) return index;
  if (index === activeIndex - 1) return index + 1;
  if (index === activeIndex) return index - 1;
  return index;
};

export const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  columnsCountBreakPoints,
  activeIndex,
  children,
}) => {
  const [currentColumns, setCurrentColumns] = useState<number>(
    getColumnsForWidth(window.innerWidth, columnsCountBreakPoints)
  );

  useEffect(() => {
    const handleResize = () => {
      setCurrentColumns(getColumnsForWidth(window.innerWidth, columnsCountBreakPoints));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [columnsCountBreakPoints]);

  const Grid = styled.div`
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(${currentColumns}, 1fr);

    & > * {
      transition: order 0.3s ease;
    }
  `;

  const orderContextValue: OrderContextType = {
    getOrder: (index: number) => getOrder(index, currentColumns, activeIndex),
    activeIndex,
  };

  return (
    <OrderContext.Provider value={orderContextValue}>
      <Grid>{children}</Grid>
    </OrderContext.Provider>
  );
};