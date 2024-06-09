const Input = ({ name, placeholder, value, onChange, required, children }) => {
  return (
    <>
      <input
        name={name}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
      {children}
    </>
  );
};

export default Input;
