const Input = ({ name, placeholder, value, onChange, children}) => {
  return (
    <div  >

      <input
        name={name}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
        {children}
      </div>
  );
};

export default Input;
