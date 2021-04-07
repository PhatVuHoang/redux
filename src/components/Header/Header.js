import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-light">
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
              <NavLink activeClassName="active text-danger" activeStyle={{background:'blue',color:'black'}} to="/trangchu">Trang chủ</NavLink>
          </li>
          <li className="nav-item">
              <NavLink activeClassName="active text-danger" activeStyle={{background:'blue',color:'black'}} to="/dangky">Đăng ký</NavLink>
          </li>
          <li className="nav-item">
              <NavLink activeClassName="active text-danger" activeStyle={{background:'blue',color:'black'}} to="/dangnhap">Đăng nhập</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
