import StepsHeader from './StepsHeader';
import RadioButton from './RadioButton';
import { useContext } from 'react';
import FormContext from '../context/FormContext';
import content from '../content/content';

const StepThree = () =>{
  const {dispatch, state } = useContext(FormContext);

  const handleChange = (name, isChecked) => {
    dispatch({ type: 'SET_DATA', payload: { budget: { ...state.budget, [name]: isChecked } } });
    console.log(name);
  };
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
      checked={state.budget[option.name]}
      label={option.label}
      onChange={handleChange}
      />
        ))}

    </div>
    </div>
  )

}
export default StepThree;