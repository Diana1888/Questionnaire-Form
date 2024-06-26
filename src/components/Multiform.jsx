import React, { useCallback, useMemo, useContext } from 'react';
import FormContext from '../context/FormContext';
import MemoizedStepper from './Stepper';
// import Stepper from './Stepper';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import Button from './Button';

const Multiform = () => {
  const { state, nextStep, previousStep, nameError, emailError } =
    useContext(FormContext);
  const { currentStep, contactName, email } = state;

  const handleNextClick = useCallback(() => {
    nextStep();
  }, [nextStep]);

  const selectedService = state.services.some((service) => service.selected);
  const selectedBudget = state.budget.some((budget) => budget.selected);

  const isNextDisabled =
    currentStep === 2
      ? !selectedService
      : currentStep === 3
      ? !selectedBudget
      : contactName.trim() === '' ||
        email.trim() === '' ||
        nameError ||
        emailError;

  const handlePreviousClick = useCallback(() => {
    previousStep();
  }, [previousStep]);

  const displayStep = useMemo(() => {
    switch (currentStep) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      case 3:
        return <StepThree />;
      case 4:
        return <StepFour />;
      default:
        return null;
    }
  }, [currentStep]);

  return (
    <div className="multiform">
      <div className="multiform-header">
        <h2 className="multiform-title">Get a project quote</h2>
        <p className="multiform-subtitle">
          Please fill the form below to receive a quote for your project. Feel
          free to add as much detail as needed.
        </p>
      </div>
      <div className="form">
        <MemoizedStepper currentStep={currentStep} />
        {displayStep}
      </div>
      <div className="steps-btns">
        {currentStep !== 1 && (
          <div className="step-previous">
            <MemoizedButton
              className="previous-btn"
              onClick={handlePreviousClick}
              label="Previous step"
            />
          </div>
        )}
        {currentStep !== 4 && (
          <div className="step-next">
            <MemoizedButton
              className="next-btn"
              onClick={handleNextClick}
              label="Next step"
              disabled={isNextDisabled}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const MemoizedButton = React.memo(Button);

export default Multiform;
