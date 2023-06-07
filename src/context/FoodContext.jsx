import { createContext, useReducer } from 'react';

export const FoodContext = createContext();

const initialState = {
  isFilterModal: false,
  filter: '',
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_FOOD_FILTER':
      return {
        isFilterModal: false,
        filter: payload,
      };
    case 'CLEAR_FOOD_FILTER':
      return {
        filter: '',
      };
    case 'OPEN_FILTER_MODAL': {
      return {
        isFilterModal: true,
      };
    }
    case 'CLOSE_FILTER_MODAL': {
      return {
        isFilterModal: false,
      };
    }
    default:
      throw new Error();
  }
};

export const FoodContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <FoodContext.Provider value={[state, dispatch]}>{children}</FoodContext.Provider>;
};
