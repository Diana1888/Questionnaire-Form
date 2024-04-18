import StepsHeader from './StepsHeader';
import finalicon from '../assets/finalicon.svg';
import Button from './Button';

const StepFour = () =>{

  const handlesubmitForm = () => {
    //submit
  };

  return(
    <div className='final-step form-steps'>
      <img src={finalicon} alt="submiticon" />
      <StepsHeader
        title="Submit your quote request"
        subtitle="Please review all the information you previously typed in the past steps, and if all is okay, submit your message to receive a project quote in 24 - 48 hours."
      />
      <div className='submit-btn'>
      <Button label="Submit" onClick={handlesubmitForm}/>
      </div>
    </div>
  )

}

export default StepFour;