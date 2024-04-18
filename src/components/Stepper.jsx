import { useContext } from 'react';
import FormContext from '../context/FormContext';
import content from '../content/content';

// const Stepper = () => {
//   const { state } = useContext(FormContext);
//   const { currentStep } = state;
//   console.log(currentStep)

//   return (
//     <div>
//       <ul className='steps-container'>
//         {content.steps.map((step) => (
//           <li className={`step ${step <= currentStep  ? 'active-step' : ''}`}
//             key={step}
//           >
//             {step}
       
//           </li>
//         ))}
//                <div className='step-line'></div>
              
//       </ul>

//       <hr />
//     </div>
//   );
// };

// export default Stepper;


const Stepper = () => {
  const { state } = useContext(FormContext);
  const { currentStep } = state;

  return (
    <div>
      <div className='steps-container'>
        {content.steps.map((step, index) => (
          <div className='step-line' key={step}>
            <div className={`step ${step <= currentStep ? 'active-step' : ''}`}>
              {step}
            </div>
            {index < content.steps.length - 1 && (
              <div className={`progress-line ${step <= currentStep ? 'active-progress-line' : ''}`}></div>
            )}
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Stepper;
