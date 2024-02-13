import React from 'react'
import styled from 'styled-components'
import intro from '../assets/images/illustration-intro.png'
import bgcurvydesk from '../assets/images/bg-curvy-desktop.svg'
import bgcurvymobile from '../assets/images/bg-curvy-mobile.svg'

const Section = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    height: auto;
  }

  @media (max-width: 575.97px) {
    height: auto;
  }
`

const CuvryBackground = styled.picture`
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: -1;
`

const IntroIllustration = styled.img`
  width: 50%;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 75%;
  }

  @media (max-width: 575.97px) {
    width: 100%;
  }
`

const Label = styled.h1`
  width: 50%;
  font-weight: 700;
  font-size: 2.25rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 70%;
  }

  @media (max-width: 575.97px) {
    width: 80%;
    font-size: 1.5rem;
  }
`

const Description = styled.p`
  width: 41%;
  font-size: 1.125rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 50%;
  }

  @media (max-width: 575.97px) {
    width: 85%;
    font-size: 1rem;
  }
`

const Button = styled.button`
  padding: 0.725rem 4rem;
  font-weight: bold;
  border-radius: 2.5rem;
  background: linear-gradient(to right, #65e2d9, #339ecc);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const SecOne = () => {
  return <>
    <Section>
      <CuvryBackground>
        <source media="(min-width: 768px)" srcSet={bgcurvydesk} />
        <img src={bgcurvymobile} alt="curvy-mobile-bg"/>
      </CuvryBackground>
      <div className='container'>
        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center">
            <IntroIllustration src={intro} alt="intro-illustration" />
            <div className='d-flex flex-column text-center align-items-center mt-5 gap-2 gap-md-4 gap-xl-4'>
              <Label >All your files in one secure location, accessible anywhere.</Label>
              <Description>Fylo stores all your most important files in one secure location. Access them wherever you need, share and   collaborate with friends family, and co-workers.</Description>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </>
}

export default SecOne