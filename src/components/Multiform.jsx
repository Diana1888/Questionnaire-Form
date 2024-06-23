import React, { useCallback, useMemo, useContext } from 'react';
import FormContext from '../context/FormContext';
import Stepper from './Stepper';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import Button from './Button';

const Multiform = () => {
  const { state, nextStep, previousStep } = useContext(FormContext);
  const { currentStep, contactName, email } = state;

  const handleNextClick = useCallback(() => {
    nextStep();
  }, [nextStep]);

  const isNextDisabled = contactName.trim() === '' || email.trim() === '';

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
        <Stepper currentStep={currentStep} />
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
