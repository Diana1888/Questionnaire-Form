const Input = ({ name, placeholder, value, onChange, image }) => {
  return (
    <div  className='input-form'>

      <input
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
