import React from "react";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import { NavLink } from "react-router-dom";

const TopnavEasyAccess = () => {
  return (
    <div className="position-relative d-none d-sm-inline-block">
      <UncontrolledDropdown className="dropdown-menu-right">
        <DropdownToggle className="header-icon" color="empty">
          <i className="simple-icon-grid" />
        </DropdownToggle>
        <DropdownMenu
          className="position-absolute mt-3"
          right
          id="iconMenuDropdown"
        >
          <a href="http://www.metodista.br/webmetodista/index.html" target="_blank" className="icon-menu-item">
            <i className="iconsminds-optimization d-block" />{" "}
            RH Rápido
          </a>
          <a href="http://webmail.metodista.br" target="_blank" className="icon-menu-item">
            <i className="iconsminds-mail-settings d-block" />{" "}
            Webmail
          </a>
          <NavLink to="/app/ui/charts" className="icon-menu-item">
            <i className="iconsminds-monitor-3 d-block" />{" "}
            Portal
          </NavLink>
          <NavLink to="/app/ramais" className="icon-menu-item">
            <i className="iconsminds-telephone-2 d-block" />{" "}
            Ramais
          </NavLink>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
};

export default TopnavEasyAccess;
