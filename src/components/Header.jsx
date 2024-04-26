import Logo from './Logo';
import Button from './Button';

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Button label="Clone now" />
    </div>
  );
};

export default Header;
