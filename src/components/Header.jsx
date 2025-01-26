import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

export default function Header() {
  return (
    <MainHeader className="header">
      <NavLink to="/">
        <img src="logo192.png" alt="logo" className="logo" />
      </NavLink>

      <Nav />
    </MainHeader>
  );
}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;

  .logo {
    height: auto;
    max-width: 30%;
  }
`;
