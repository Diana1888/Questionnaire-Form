import StepsHeader from './StepsHeader';
import RadioButton from './RadioButton';
import { useContext } from 'react';
import FormContext from '../context/FormContext';
import content from '../content/content';

const StepThree = () =>{
  const {handleRadio, state } = useContext(FormContext);

 
  return(
    <div className='form-steps'>
      <StepsHeader
        title="What’s your project budget?"
        subtitle="Please select the project budget range you have in mind."
      />
      <div className="form-blocks">
        {content.radioOptions.map((option) => (
      <RadioButton
      key={option.name} 
      name={option.name}
      checked={state.budget.find(budgetItem => budgetItem.name === option.name)?.selected || false}
      label={option.name}
      onChange={handleRadio}
      />
        ))}

    </div>
    </div>
  )

}
export default StepThree;