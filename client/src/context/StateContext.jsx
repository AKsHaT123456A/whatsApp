import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ initialState, reducer, childern }) => {
  <StateContext.Provider value={useReducer(reducer,initialState)}>{childern}</StateContext.Provider>;
};

export const useStateProvider = () => useContext(StateContext);
