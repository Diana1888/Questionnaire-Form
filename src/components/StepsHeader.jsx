const StepsHeader = ({ title, subtitle }) => {
  return (
    <div>
      <h3 className="form-title">{title}</h3>
      <p className="form-subtitle">{subtitle}</p>
    </div>
  );
};

export default StepsHeader;
