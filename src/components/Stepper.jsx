import React from 'react';
import content from '../content/content';

const Stepper = ({ currentStep }) => {
  return (
    <div>
      <div className="steps-container">
        {content.steps.map((step, index) => (
          <div className="step-line" key={step}>
            <div className={`step ${step <= currentStep ? 'active-step' : ''}`}>
              {step}
            </div>
            {index < content.steps.length - 1 && (
              <div className="progress-line-container">
                <div className="progress-line"></div>
                {step < currentStep && (
                  <div
                    className="active-progress-line"
                    style={{ width: '100%' }}
                  ></div>
                )}
                {step === currentStep && (
                  <div
                    className="active-progress-line"
                    style={{ width: '50%' }}
                  ></div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

const MemoizedStepper = React.memo(Stepper);

export default MemoizedStepper;
