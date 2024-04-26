import logo from '../assets/logo.svg';

const Logo = () => {
  return (
    <div className="logotype">
      <img className="logo-img" src={logo} alt="logo" />
      <h1 className="logo-title">
        brix <span className="logo-subtitle">templates</span>
      </h1>
    </div>
  );
};

export default Logo;
