import { useContext } from 'react';
import Checkbox from './Checkbox';
import StepsHeader from './StepsHeader';
import FormContext from '../context/FormContext';
import content from '../content/content';

const StepTwo = () => {
  const { dispatch, state } = useContext(FormContext);

  const handleChange = (name, isChecked) => {
    dispatch({ type: 'SET_DATA', payload: { services: { ...state.services, [name]: isChecked } } });
    console.log(name);
  };

  return (
    <div className='form-steps'>
      <StepsHeader
        title="Our services"
        subtitle="Please select which service you are interested in."
      />
      <div className="form-blocks">
        {content.servicesData.map((service) => (
         <div
         key={service.name}
       >
   
            
            <Checkbox name={service.name}
            checked={state.services[service.name]}
            label={service.label}
             onChange={handleChange} 
             image={service.icon}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepTwo;
