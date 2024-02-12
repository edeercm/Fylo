import React from 'react'
import styled from 'styled-components'
import Testimonials from '../components/SecFourComp/Testimonials'

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50vh;

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
      </div>
    </Section>
  </>
}

export default SecFour