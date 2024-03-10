import React, { createContext, useContext } from 'react';

const ApiKeyContext = createContext();

export const ApiKeyProvider = ({ apiKey, children }) => (
  <ApiKeyContext.Provider value={apiKey}>
    {children}
  </ApiKeyContext.Provider>
);

export const useApiKey = () => {
  const apiKey = useContext(ApiKeyContext);
  if (!apiKey) {
    throw new Error('Erro na chave');
  }
  return apiKey;
};