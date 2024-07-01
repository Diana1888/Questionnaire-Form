import StepsHeader from './StepsHeader';
import finalicon from '../assets/finalicon.svg';
import Button from './Button';
import { useContext, useState } from 'react';
import FormContext from '../context/FormContext';

const StepFour = () => {
  const { handleSubmit } = useContext(FormContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const handleFormSubmit = () => {
    setIsSubmitting(true);
    handleSubmit();

    setTimeout(() => {
      setIsSubmitting(false);
    if (localStorage.getItem('formData')){
      setFormSent(true);
    }

    }, 3000);
  };

  return (
    <div className="final-step">
      <img src={finalicon} alt="submiticon" />
      <div className="final-step-header">
        <StepsHeader
          title="Submit your quote request"
          subtitle="Please review all the information you previously typed in the past steps, and if all is okay, submit your message to receive a project quote in 24 - 48 hours."
        />
      </div>
      <div className="submit-btn">
        <Button label="Submit" onClick={handleFormSubmit} />
        {isSubmitting && (
          <div className="spinner-overlay">
            <div className="spinner-container"></div>
          </div>
        )}
        {formSent && (
          <div className="success-message">
            <p className="form-title">Your Quote Request Has Been Submitted</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StepFour;
