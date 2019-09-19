import React, { Component } from "react";

import { NavLink } from "react-router-dom";
import { connect } from "react-redux";


import { MobileMenuIcon, MenuIcon } from "../../components/svg";
import TopnavEasyAccess from "./Topnav.EasyAccess";
import TopnavNotifications from "./Topnav.Notifications";

import { getDirection, setDirection } from "../../helpers/Utils";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isInFullScreen: false,
      searchKeyword: ""
    };
  }


  render() {
    return (
        <nav className="d-flex align-items-center footer fixed-bottom">
          <div className="d-flex pl-5 text-white align-items-left">
            Copyright &copy; <a href="https://github.com/educacaometodista" className="">Educação Metodista</a>
          </div>
        </nav>
    );
  }
}

export default Footer;