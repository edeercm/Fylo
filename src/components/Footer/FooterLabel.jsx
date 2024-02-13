import React from 'react'
import styled from 'styled-components'

const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.25rem;
  
  @media (min-width: 575.98px) and (max-width: 991.98px) {
    justify-content: start;
  }

  @media (max-width: 575.97px) {
  }
`


const FooterLabel = () => {
  return <>
    <Info>
      <div className='d-flex gap-1'>
        <span>Challenge by</span>
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          <span className='text-decoration-underline'>Frontend Mentor,</span>
        </a>
      </div>
      <div className='d-flex gap-1'>
        coded by
        <a href="https://edercmportfolio.netlify.app/">
          <span className='text-decoration-underline'>Eder.</span>
        </a>
      </div>
    </Info>
  </>
}

export default FooterLabel