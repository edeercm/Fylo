import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/images/logo.svg'
import location from '../../assets/images/icon-location.svg'
import ContactInfo from './ContactInfo'
import SocialMediaIcons from './SocialMediaIcons'
import FooterLabel from './FooterLabel'

const Foooter = styled.footer`
  width: 100%;
  height: 75vh;
  display: flex;
  align-items: end;
  padding: 0 0 3.5rem;
  background-color: hsl(216, 53%, 9%);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const Container = styled.div`
  width: 100%;
  height: 47.5vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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

const Icon = styled.img`
  width: 5%;
  height: auto;
  color: white;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const Label = styled.p`
  color: white;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const Footer = () => {
  return <>
    <Foooter>
      <Container className="container">
        <article>
          <Logo src={logo} alt="logo" />
        </article>
        <div className="row">
          <div className="col-3">
            <p className='d-flex flex-row align-items-start gap-2'>
              <Icon src={location} alt="location-icon" />
              <Label>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua</Label>
            </p>
          </div>
          <div className="col-3">
            <ContactInfo />
          </div>
          <div className="col-2">
            <a href="#">
              <ul className='d-flex flex-column text-white gap-2'>
                <li>About Us</li>
                <l1>Jobs</l1>
                <l1>Press</l1>
                <l1>Blog</l1>
              </ul>
            </a>
          </div>
          <div className="col-2">
            <a href="#">
              <ul className='d-flex flex-column text-white gap-2'>
                <l1>Contact Us</l1>
                <l1>Terms</l1>
                <l1>Privacy</l1>
              </ul>
            </a>
          </div>
          <div className="col-2">
            <SocialMediaIcons />
          </div>
        </div>
        <FooterLabel />
      </Container>
    </Foooter >
  </>
}

export default Footer
