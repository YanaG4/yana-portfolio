import React from 'react';

export interface OrderContextType {
  getOrder: (index: number) => number;
  activeIndex: number;
}

export const OrderContext = React.createContext<OrderContextType>({
  getOrder: (index: number) => index,
  activeIndex: 0,
});