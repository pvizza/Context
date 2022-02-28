import React, { useState } from 'react';
import './style.css';
import CardOne from './cardOne';
import CardTwo from './cardTwo';
import { Provider } from './ApiContext';

export default function App() {
  const [theme, setTheme] = useState('black');

  const callback = () => setTheme('black');

  const contextValue = {
    theme,
    callback: callback,
  };

  return (
    <Provider value={contextValue}>
      <CardOne />
      <CardTwo />
      <button onClick={() => setTheme('withe')}> Change theme </button>
    </Provider>
  );
}
