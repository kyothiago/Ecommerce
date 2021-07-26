import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  padding: 1rem;
  background: #65aef6;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  a {
    padding: 0 1rem;
    font-weight: 600;
    color: white;
    &:hover {
      color: black;
    }
    &:focus {
      color: black;
    }
  }
`