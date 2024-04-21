




const RadioButton = ({ name, label, checked, onChange}) => {
  const handleChange = () => {
    if (!checked) { // Only trigger onChange if the radio button is not already checked
      onChange(name, true);
    }
  };

  return(
    <div>
      <label  className={`input-form-title checkbox radio ${checked ? 'checked-checkbox' : ''}`} >
        <div className={`${checked ? 'checked-radio' : 'unchecked-radio'}`}></div>
      <input
      className="input-box"
      type="radio"
      name={name}
      checked={checked}
      onChange={handleChange}
       />
        {/* <span className="custom-radio" /> */}
       {label}
       </label>
    </div>
  )

}

export default RadioButton;