import React from 'react'
import styled from 'styled-components'
import Cards from '../components/SecTwoComp/Cards'

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: var(--second-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    height: auto;
    padding: 8.75rem 0;
  }

  @media (max-width: 575.97px) {
    height: auto;
    padding: 7rem 0
  }
`

const SecTwo = () => {
  return <>
    <Section>
      <div className="container">
        <Cards />
      </div>
    </Section>
  </>
}

export default SecTwo