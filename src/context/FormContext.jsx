import { createContext, useReducer } from 'react';

const FormContext = createContext({});

const initialState = {
  currentStep: 1,
  contactName: '',
  email: '',
  phone: '',
  company: '',
  services: {
    development: false,
    webDesign: false,
    marketing: false,
    other: false,
  },
  budget: {
    opt1: false,
    opt2: false,
    opt3: false,
    opt4: false,
  },

};

const reducer = (state, action) => {
  switch (action.type) {
    case 'NEXT_STEP':
      return { ...state, currentStep: state.currentStep + 1 };
    case 'PREVIOUS_STEP':
      return { ...state, currentStep: state.currentStep - 1 };
    case 'SET_DATA':
      return { ...state, ...action.payload };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};

export const FormProvider = ({ children }) => {
  // const [{ currentStep, contactName, email, phone, company, development, webDesign, marketing,
  //   other, five, ten, twenty, fifty}, dispatch] = useReducer(reducer, initialState);

  const [state,  dispatch] = useReducer(reducer, initialState);
  

  const nextStep = () => {
    dispatch({ type: 'NEXT_STEP' });
  };

  const previousStep = () => {
    dispatch({ type: 'PREVIOUS_STEP' });
  };

  const setData = () => {
    dispatch({ type: 'SET_DATA', payload: data})
  }
  return (
    <FormContext.Provider
      value={{  dispatch, nextStep, previousStep, state, setData }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
