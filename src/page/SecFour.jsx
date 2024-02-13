import React from 'react'
import styled from 'styled-components'
import Testimonials from '../components/SecFourComp/Testimonials'
import EarlyAcces from '../components/SecFourComp/EarlyAcces'
import quotes from '../assets/images/bg-quotes.png'

const Section = styled.section`
  width: 100%;
  height: auto;
  padding: 4.5rem 0 0;
  background-color: var(--second-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const Quotes = styled.img`
  width: 3.5%;
  height: auto;
  margin-bottom: -0.75rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const SecFour = () => {
  return <>
    <Section>
      <div className="container">
        <Quotes src={quotes} alt="quotes-icon" />
        <Testimonials />
        <EarlyAcces />
      </div>
    </Section>
  </>
}

export default SecFour