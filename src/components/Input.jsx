const Input = ({ name, placeholder, value, onChange, image }) => {
  return (
    <div  className='input-form'>
      <input className="input-enter"
        name={name}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <img src={image} alt={placeholder} />
      </div>
  );
};

export default Input;
