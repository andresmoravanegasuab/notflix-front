import "./Footer.css";

import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="footer">
            Todos los derechos reservados @2022
        </div>
    );
  }
}

export default Footer;
