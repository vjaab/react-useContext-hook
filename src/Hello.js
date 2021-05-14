import React, { useContext } from 'react';
import { myContext } from './App';

export default () => {
  const myValue = useContext(myContext);
  return <div>{myValue}</div>;
}

