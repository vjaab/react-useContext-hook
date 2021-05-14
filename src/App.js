import React from 'react';
import './style.css';
import Hello from './Hello';

export const myContext = React.createContext();
export default function App() {
  return (
    <myContext.Provider value={'Vijay'}>
      <Hello />
    </myContext.Provider>
  );
}
