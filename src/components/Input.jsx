const Input = ({ name, placeholder, value, onChange, children }) => {
  return (
    <>
      <input
        name={name}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {children}
    </>
  );
};

export default Input;
