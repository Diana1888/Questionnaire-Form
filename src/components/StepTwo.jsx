import { useContext } from 'react';
import Checkbox from './Checkbox';
import StepsHeader from './StepsHeader';
import FormContext from '../context/FormContext';
import content from '../content/content';

const StepTwo = () => {
  const { handleCheckbox, state } = useContext(FormContext);

  return (
    <div className="form-steps">
      <StepsHeader
        title="Our services"
        subtitle="Please select which service you are interested in."
      />
      <div className="form-blocks">
        {content.servicesData.map((service) => (
          <div key={service.name}>
            <Checkbox
              name={service.name}
              checked={
                state.services.find((s) => s.name === service.name)?.selected ||
                false
              }
              label={service.label}
              onChange={handleCheckbox}
              image={service.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepTwo;
