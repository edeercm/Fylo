import React from 'react'
import intro from '../assets/images/illustration-intro.png'
import styled from 'styled-components'

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const Image = styled.img`
  width: 50%;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const Label = styled.h1`
  width: 50%;
  color: white;
  font-weight: 700;
  font-size: 2.25rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const Description = styled.p`
  width: 41%;
  color: white;
  font-size: 1.125rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const Button = styled.button`
  /* display: block;
  margin: 0 auto; */
  padding: 0.725rem 4rem;
  color: white;
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
      <div className='container'>
        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center">
            <Image src={intro} alt="intro-illustration" />
            <div className='d-flex flex-column text-center align-items-center mt-5 gap-4'>
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