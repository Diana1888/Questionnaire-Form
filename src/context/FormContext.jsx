import { createContext, useCallback, useReducer, useState } from 'react';

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
  const [state, dispatch] = useReducer(reducer, initialState);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const nextStep = useCallback(() => {
    dispatch({ type: 'NEXT_STEP' });
  }, [dispatch]);

  const previousStep = useCallback(() => {
    dispatch({ type: 'PREVIOUS_STEP' });
  }, [dispatch]);

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const handleInput = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      if (!/^\d*$/.test(value)) {
        return;
      }
    }

    dispatch({ type: 'SET_DATA', payload: { [name]: value } });

    if (name === 'contactName') {
      if (value.trim() === '') {
        setNameError('Name is required');
      } else {
        setNameError('');
      }
    }

    if (name === 'email') {
      if (value.trim() === '') {
        setEmailError('Email is required');
      } else if (!emailRegex.test(value.trim())) {
        setEmailError('Invalid email format');
      } else {
        setEmailError('');
      }
    }
  };

  const handleCheckbox = (name, isChecked) => {
    const updatedServices = state.services.map((service) =>
      service.name === name ? { ...service, selected: isChecked } : service
    );
    dispatch({ type: 'SET_DATA', payload: { services: updatedServices } });
  };

  const handleRadio = (name) => {
    const updatedBudget = state.budget.map((item) =>
      item.name === name
        ? { ...item, selected: true }
        : { ...item, selected: false }
    );
    dispatch({ type: 'SET_DATA', payload: { budget: updatedBudget } });
  };

  const handleSubmit = () => {
    if (state.contactName.trim() === '') {
      setNameError('Name is required');
    }
    if (state.email.trim() === '') {
      setEmailError('Email is required');
    }

    if (nameError || emailError) {
      return;
    }

    const selectedServices = state.services
      .filter((service) => service.selected)
      .map((service) => service.name);
    const selectedBudget = state.budget
      .filter((option) => option.selected)
      .map((option) => option.name);

    const formData = {
      contactName: state.contactName,
      email: state.email,
      phone: state.phone,
      company: state.company,
      services: selectedServices,
      budget: selectedBudget
    };

    const formDataJson = JSON.stringify(formData);
    localStorage.setItem('formData', formDataJson);
  };

  return (
    <FormContext.Provider
      value={{
        dispatch,
        nextStep,
        previousStep,
        state,
        handleInput,
        handleCheckbox,
        handleRadio,
        handleSubmit,
        nameError,
        emailError
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
