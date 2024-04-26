const Checkbox = ({ name, label, checked, onChange, image }) => {
  const handleChange = (e) => {
    onChange(name, e.target.checked);
  };
  return (
    <div>
      <label
        className={`input-form-title checkbox ${
          checked ? 'checked-checkbox' : ''
        }`}
      >
        <div className="icon-background">
          <img src={image} alt={label} />
        </div>
        <input
          className="input-box"
          type="checkbox"
          name={name}
          checked={checked}
          onChange={handleChange}
        />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
