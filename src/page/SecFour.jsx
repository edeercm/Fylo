import React from 'react'
import styled from 'styled-components'
import Testimonials from '../components/SecFourComp/Testimonials'
import EarlyAcces from '../components/SecFourComp/EarlyAcces'

const Section = styled.section`
  width: 100%;
  height: auto;
  padding: 4.5rem 0 0;


  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const SecFour = () => {
  return <>
    <Section>
      <div className="container">
        <Testimonials />
        <EarlyAcces />
      </div>
    </Section>
  </>
}

export default SecFour