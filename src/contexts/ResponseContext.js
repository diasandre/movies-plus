import React from 'react';

export const Context = React.createContext({
  200: '',
});

export const ContextProvider = Context.Provider;
export const ContextConsumer = Context.Consumer;
