import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/images/logo.svg'
import location from '../../assets/images/icon-location.svg'
import phone from '../../assets/images/icon-phone.svg'
import email from '../../assets/images/icon-email.svg'

const Foot = styled.footer`
  width: 100%;
  height: auto;
  padding: 5rem 0;
  background-color: hsl(216, 53%, 9%);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const Logo = styled.img`
  width: auto;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const LocationIcon = styled.img`
  width: auto;
  height: 100%;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const Label = styled.span`
  color: white;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const PhoneIcon = styled.img`
  width: auto;
  height: 100%;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const EmailIcon = styled.img`
  width: auto;
  height: 100%;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const Footer = () => {
  return <>
    <Foot>
      <div className="container">
        <div className="row gap-5">
          <div className="col-12">
            <article>
              <Logo src={logo} alt="" />
            </article>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-6">
                <div className="row">
                  <div className="col-7">
                    <div className='d-flex flex-row'>
                      <LocationIcon src={location} alt="location-icon" />
                      <Label>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua</Label>
                    </div>
                  </div>
                  <div className="col-5">
                    <ul className='d-flex flex-column gap-3'>
                      <li className='d-flex flex-row text-white align-items-center gap-3'>
                        <PhoneIcon src={phone} alt="" />
                        <a href="tel:+1-543-123-4567">+1-543-123-4567</a>
                      </li>
                      <l1 className='d-flex flex-row text-white align-items-center gap-3'>
                        <EmailIcon src={email} className='w-auto' alt="" />
                        <a href="mailto:example@fylo.com">example@fylo.com</a>
                      </l1>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col-4">
                    <ul className='d-flex flex-column text-white gap-3'>
                      <l1>About Us</l1>
                      <l1>Jobs</l1>
                      <l1>Press</l1>
                      <l1>Blog</l1>
                    </ul>
                  </div>
                  <div className="col-4">
                    <ul className='d-flex flex-column text-white gap-3'>
                      <l1>Contact Us</l1>
                      <l1>Terms</l1>
                      <l1>Privacy</l1>
                    </ul>
                  </div>
                  <div className="col-4">
                    <ul className='d-flex flex-column text-white gap-3'>
                      <l1>Contact Us</l1>
                      <l1>Terms</l1>
                      <l1>Privacy</l1>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Foot>

  </>
}

export default Footer