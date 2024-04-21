import { useContext } from 'react';
import Input from './Input';
import StepsHeader from './StepsHeader';
import FormContext from '../context/FormContext';
import content from '../content/content';

const StepOne = () => {
  const { state, handleInput } = useContext(FormContext);

  return (
    <div className="form-steps">
      <StepsHeader
        title="Contact details"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisc."
      />
      <div className="form-blocks">
        {content.contactData.map((data) => (
          <label key={data.name} className="input-form-title">
            {data.label}

            <div className="input-form">
              <Input
                name={data.name}
                placeholder={data.placeholder}
                value={state[data.name]}
                onChange={handleInput}
              />
              <img src={data.icon} alt={data.label} />
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default StepOne;
