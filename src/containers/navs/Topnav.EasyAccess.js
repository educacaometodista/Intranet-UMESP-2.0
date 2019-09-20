import React from "react";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import { NavLink } from "react-router-dom";
import IntlMessages from "../../helpers/IntlMessages";

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
          <NavLink to="/app/dashboards/default" className="icon-menu-item">
            <i className="iconsminds-optimization d-block" />{" "}
            RH Rápido
          </NavLink>
          <NavLink to="/app/ui" className="icon-menu-item">
            <i className="iconsminds-mail-settings d-block" />{" "}
            Webmail
          </NavLink>
          <NavLink to="/app/ui/charts" className="icon-menu-item">
            <i className="iconsminds-monitor-3 d-block" />{" "}
            Portal
          </NavLink>
          <NavLink to="/app/ui" className="icon-menu-item">
            <i className="iconsminds-telephone-2 d-block" />{" "}
            Ramais
          </NavLink>
          {/* <NavLink to="/app/applications/survey" className="icon-menu-item">
            <i className="iconsminds-formula d-block" />{" "}
            Aniversariantes
          </NavLink>
          <NavLink to="/app/applications/todo" className="icon-menu-item">
            <i className="iconsminds-check d-block" />{" "}
            LoremIpsum
          </NavLink> */}
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
};

export default TopnavEasyAccess;
