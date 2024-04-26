const RadioButton = ({ name, checked, onChange }) => {
  const handleChange = () => {
    if (!checked) {
      onChange(name, true);
    }
  };

  return (
    <div>
      <label
        className={`input-form-title checkbox radio ${
          checked ? 'checked-checkbox' : ''
        }`}
      >
        <div
          className={`${checked ? 'checked-radio' : 'unchecked-radio'}`}
        ></div>
        <input
          className="input-box"
          type="radio"
          name={name}
          checked={checked}
          onChange={handleChange}
        />
        {name}
      </label>
    </div>
  );
};

export default RadioButton;
