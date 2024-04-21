import { createContext, useReducer, useCallback } from 'react';

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
  const [state,  dispatch] = useReducer(reducer, initialState);
  const handleSubmit = useCallback(() => {
    localStorage.setItem('formData', JSON.stringify(state));
    console.log(localStorage);

  }, [state]);
  

  const nextStep = () => {
    dispatch({ type: 'NEXT_STEP' });
  };

  const previousStep = () => {
    dispatch({ type: 'PREVIOUS_STEP' });
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'SET_DATA', payload: { [name]: value } });
    console.log(value);
  };

  const handleCheckbox = (name, isChecked) => {
    dispatch({ type: 'SET_DATA', payload: { services: { ...state.services, [name]: isChecked } } });
    console.log(name);
  };

  const handleRadio = (name, isChecked) => {
    const updatedBudget = {};
    
    // Set the clicked radio button to isChecked
    updatedBudget[name] = isChecked;
  
    // Uncheck all other radio buttons
    Object.keys(state.budget).forEach(key => {
      if (key !== name) {
        updatedBudget[key] = false;
      }
    });
  
    dispatch({ type: 'SET_DATA', payload: { budget: updatedBudget } });
    console.log(name);
  };

  
  return (
    <FormContext.Provider
      value={{  dispatch, nextStep, previousStep, state, handleInput, handleCheckbox, handleRadio, handleSubmit }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
