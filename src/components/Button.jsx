const Button = ({ className, label, onClick }) => {
  return (
    <div>
      <button onClick={onClick} className={`header-btn ${className}`}>
        {label}
      </button>
    </div>
  );
};

export default Button;
