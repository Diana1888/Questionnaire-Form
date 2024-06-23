const Button = ({ className, label, onClick, disabled }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`header-btn ${className} ${disabled ? 'disabled' : ''}`}
        disabled={disabled}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
