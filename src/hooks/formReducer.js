import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "NEXT_STEP":
      return { ...state, currentStep: state.currentStep + 1 };
    case "PREVIOUS_STEP":
      return { ...state, currentStep: state.currentStep - 1 };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};


const formReducer = () => {
  initialState = {
    currentStep: 1,
    contactName: "",
    email: "",
    phone: "",
    company: "",
    development: false,
    webdesign: false,
    marketing: false,
    other: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const nextStep = () => {
    dispatch({ type: 'NEXT_STEP' });
  };

  const previousStep = () => {
    dispatch({ type: 'PREVIOUS_STEP' });
  };

  return {
    state,
    nextStep,
    previousStep
  };

};


export default formReducer;