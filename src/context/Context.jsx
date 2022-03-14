import React, { createContext } from 'react';

export const Store = createContext();

export default function Context({ children }) {
  return <Store.Provider>{children}</Store.Provider>;
}
