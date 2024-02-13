import React from 'react'
import styled from 'styled-components'

const Info = styled.p`
  margin: 0 auto;
  color: white;
  
  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const FooterLabel = () => {
  return <>
    <div className="d-flex align-items-center justify-content-center">
      <Info>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor, </a>
        coded by <a href="https://edercmportfolio.netlify.app/">Eder.</a>
      </Info>
    </div>
  </>
}

export default FooterLabel