import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <NavLink
              activeClassName="active text-danger"
              // activeStyle={{ background: "transparent", color: "black" }}
              to="/trangchu"
            >
              Trang chủ
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active text-danger"
              // activeStyle={{ background: "transparent", color: "black" }}
              to="/dangky"
            >
              Đăng ký
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active text-danger"
              // activeStyle={{ background: "transparent", color: "black" }}
              to="/dangnhap"
            >
              Đăng nhập
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdownId"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Hook
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <NavLink className="dropdown-item" to="/usestatedemo">
                Usestate demo
              </NavLink>
              <NavLink className="dropdown-item" to="/useeffectdemo">
                UseEffectDemo
              </NavLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
