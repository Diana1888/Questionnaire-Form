import { useContext } from 'react';
import Input from './Input';
import StepsHeader from './StepsHeader';
import FormContext from '../context/FormContext';
import content from '../content/content';


const StepOne = () => {
  const { state, dispatch } = useContext(FormContext);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'SET_DATA', payload: { [name]: value } })
    console.log(value);
  };

  return (
    <div className='form-steps'>
      <StepsHeader
        title="Contact details"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisc."
      />
      <div className='form-blocks'>
      {content.contactData.map((data) => (
        <label key={data.name} className='input-form-title'>         
          {data.label}

          <Input 
          name={data.name}
          placeholder={data.placeholder} 
          value={state[data.name]}
          onChange={handleChange}
          image={data.icon}
          />
        </label>
        ))}
      </div>
    </div>
  );
};

export default StepOne;
