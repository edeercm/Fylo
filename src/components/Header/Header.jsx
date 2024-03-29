import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/images/logo.svg'

const Label = styled.li`
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0; /* Ajuste para que la línea comience desde el lado derecho */
    width: 0;
    height: 0.175rem;
    background-color: var(--text-color);
    transition: width 0.35s ease-out, right 0.35s ease-in; /* Agregamos right a la transición */
  }

  &:hover::after {
    width: 100%;
    left: 0;
  }

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const Img = styled.img`
  width: 75%;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const Header = () => {
  return <>
    <header>
      <div className="container d-flex align-items-center justify-content-evenly justify-content-md-between justify-content-xl-between py-5">
        <div>
          <a href="#">
            <Img src={Logo} alt="logo-icon" />
          </a>
        </div>
        <nav>
          <ul className='d-flex flex-row gap-3 gap-md-5 gap-xl-5'>
            <Label>Features</Label>
            <Label>Team</Label>
            <Label>Sign In</Label>
          </ul>
        </nav>
      </div>
    </header>
  </>
}

export default Header