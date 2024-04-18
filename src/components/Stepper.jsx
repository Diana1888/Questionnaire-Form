import { useContext } from 'react';
import FormContext from '../context/FormContext';
import content from '../content/content';

const Stepper = () => {
  const { state } = useContext(FormContext);
  const { currentStep } = state;
  console.log(currentStep)

  return (
    <div>
      <div className='steps'>
        {content.steps.map((step) => (
          <div
            key={step}
            style={{ fontWeight: currentStep === step ? 'bold' : 'normal' }}
          >
            {step}
          </div>
        ))}
      </div>
      <div></div>
      <hr />
    </div>
  );
};

export default Stepper;
