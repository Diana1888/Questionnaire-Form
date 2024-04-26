import Stepper from './Stepper';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';

import Button from './Button';
import { useContext } from 'react';
import FormContext from '../context/FormContext';

const Multiform = () => {
  const { state, nextStep, previousStep } = useContext(FormContext);
  const { currentStep } = state;

  const handleNextClick = () => {
    nextStep();
  };

  const handlePreviousClick = () => {
    previousStep();
  };

  const displayStep = (currentStep) => {
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
  };

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
        <Stepper />
        {displayStep(currentStep)}
      </div>

      {currentStep === 1 && (
        <div className="step-next">
          <Button
            className="next-btn"
            onClick={handleNextClick}
            label="Next step"
          />
        </div>
      )}
      {(currentStep === 2 || currentStep === 3) && (
        <div className="steps-btns">
          <Button
            className="previous-btn"
            onClick={handlePreviousClick}
            label="Previous step"
          />
          <Button onClick={handleNextClick} label="Next step" />
        </div>
      )}
      {currentStep === 4 && (
        <div className="step-previous">
          <Button
            className="previous-btn"
            onClick={handlePreviousClick}
            label="Previous step"
          />
        </div>
      )}
    </div>
  );
};
export default Multiform;
