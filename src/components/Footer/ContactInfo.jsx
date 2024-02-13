import React from 'react'
import styled from 'styled-components'
import phone from '../../assets/images/icon-phone.svg'
import email from '../../assets/images/icon-email.svg'

const Icon = styled.img`
  width: auto;
  height: 2.5vh;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  
  }

  @media (max-width: 575.97px) {
  }
`

const ContactInfo = () => {
  return <>
    <ul className='d-flex flex-column gap-3'>
      <li className='d-flex flex-row text-white align-items-center gap-3'>
        <Icon src={phone} alt="phone-icon" />
        <a href="tel:+1-543-123-4567">+1-543-123-4567</a>
      </li>
      <l1 className='d-flex flex-row text-white align-items-center gap-3'>
        <Icon src={email} alt="email-icon" />
        <a href="mailto:example@fylo.com">example@fylo.com</a>
      </l1>
    </ul>
  </>
}

export default ContactInfo