import { createContext, useReducer, useCallback } from 'react';

const FormContext = createContext({});

const initialState = {
  currentStep: 1,
  contactName: '',
  email: '',
  phone: '',
  company: '',
  services: [
    { name: 'development', selected: false },
    { name: 'webDesign', selected: false },
    { name: 'marketing', selected: false },
    { name: 'other', selected: false }
  ],
  budget: [
    { name: '$5.000 - $10.000', selected: false },
    { name: '$10.000 - $20.000', selected: false },
    { name: '$20.000 - $50.000', selected: false },
    { name: '$50.000 +', selected: false }
  ]

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
    const updatedServices = state.services.map(service =>
      service.name === name ? { ...service, selected: isChecked } : service
    );
    dispatch({ type: 'SET_DATA', payload: { services: updatedServices } });
  };

  const handleRadio = (name) => {
    const updatedBudget = state.budget.map(item =>
      item.name === name ? { ...item, selected: true } : { ...item, selected: false }
    );
    dispatch({ type: 'SET_DATA', payload: { budget: updatedBudget } });
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
