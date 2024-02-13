import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/images/logo.svg'

const Label = styled.li`
  color: white;
  font-family: var(--open-sans);

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
      <div className="container d-flex align-items-center justify-content-between py-5">
        <div>
          <a href="#">
            <Img src={Logo} alt="logo-icon" />
          </a>
        </div>
        <nav>
          <ul className='d-flex flex-row gap-4 gap-md-5 gap-xl-5'>
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