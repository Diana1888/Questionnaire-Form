import Logo from "./Logo";
import Button from "./Button";

import Input from "./Input";
const Footer = () => {

  return(
    <div className="footer">
      <div className="footer-logo">
      <Logo />
      <p className="footer-copyright">Copyright © 2021 BRIX Templates | All Rights Reserved</p>
      </div>
      <div className="input-with-button" >
        <Input placeholder="Enter your email"/> <Button label="Subscribe"/>
        
      </div>

    </div>
  )
}

export default Footer;