import React, { createContext, useState } from 'react';

export const SellerContext = createContext();

export const SellerProvider = ({ children }) => {
  const [seller, setSeller] = useState(null);

  return (
    <SellerContext.Provider value={{ seller, setSeller }}>
      {children}
    </SellerContext.Provider>
  );
};
