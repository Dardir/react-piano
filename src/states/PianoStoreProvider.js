import React, { createContext, useReducer, useContext } from 'react';
import pianoReducer from '../reducers/pianoReducer'
import PianoState from './PianoState'

const StoreContext = createContext(null);

export function PianoStoreProvider({ children }) {
  const [state, dispatch] = useReducer(pianoReducer, PianoState);
  const value = { state, dispatch };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export const usePianoStore = () => useContext(StoreContext);