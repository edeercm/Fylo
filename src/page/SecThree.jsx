import React from 'react'
import styled from 'styled-components'
import productive from '../assets/images/illustration-stay-productive.png'
import arrow from '../assets/images/icon-arrow.svg'

const Section = styled.section`
  width: 100%;
  height: 75vh;
  background-color: var(--second-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    height: auto;
    padding-bottom: 5rem;

  }

  @media (max-width: 575.97px) {
    height: auto;
    padding-bottom: 5rem;
  }
`

const Label = styled.h1`
  width: 55%;
  font-weight: bold;
  font-size: 2.5rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 100%;
  }

  @media (max-width: 575.97px) {
    width: 100%;
  }
`

const Description = styled.p`
  width: 85%;
 
  @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 100%;
  }

  @media (max-width: 575.97px) {
    width: 100%;
  }
`

const Button = styled.a`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;

  &::after {
    content: '';
    position: absolute;
    width: 26.75%; 
    height: 2px;
    left: 0;
    bottom: -0.25rem;
    background-color: var(--text-color);

    @media (max-width: 575.97px) {
      width: 50%; 
    }
  }
 
  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const Icon = styled.img`
  width: 2.75%;
 
  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
    width: 5%;
  }
`

const SecThree = () => {
  return <>
    <Section>
      <div className="container">
        <div className="row gap-5 gap-xl-0">
          <div className="col-12 col-xl-6 d-flex justify-content-center">
            <article>
              <img src={productive} alt="" />
            </article>
          </div>
          <div className="col-12 col-xl-6 d-flex align-items-center">
            <div className='d-flex flex-column ms-0 ms-xl-4 gap-2'>
              <Label>Stay productive, wherever you are</Label>
              <Description>Never let location be an issue when accessing your files. Fylo has you covered for all of your file
                storage needs.</Description>
              <Description> Securely share files and folders with friends, family and colleagues for live collaboration. No email
                attachments required.</Description>
              <Button href="#">
                See how Fylo works
                <Icon src={arrow} alt="arrow-icon" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </>
}

export default SecThree