import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  position: relative;
  margin: 8.75rem 0 -5rem;
  width: 65%;
  height: 32.5vh;
  padding: 0 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: var(--alternative-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const Label = styled.h2`
  font-weight: bold;
  font-size: 2rem;
  color: var(--text-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
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

const EarlyAcces = () => {
  return <>
    <div className='d-flex align-items-center justify-content-center'>
      <Card>
        <Label>Get early access today</Label>
        <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
          questions, our support team would be happy to help you.</p>
        <form action="" className='d-flex'>
          <input
            type="email"
            name='email'
            id='email'
            placeholder='email@example.com'
            required
          />
          <Button type="submit">Get Started for Free</Button>
        </form>
      </Card>
    </div>


  </>
}

export default EarlyAcces