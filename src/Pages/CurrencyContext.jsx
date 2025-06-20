import React, { createContext, useContext } from 'react';

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children, value }) => {
  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};