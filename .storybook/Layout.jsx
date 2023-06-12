import React from 'react';
import { useAppState } from '../src/components/AppContext';

export const Layout = ({ children }) => {
  const appState = useAppState();
  return <div className={appState.theme}>{children}</div>;
};
