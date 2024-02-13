import React from 'react'
import styled from 'styled-components'
import one from '../../assets/images/profile-1.jpg'
import two from '../../assets/images/profile-2.jpg'
import three from '../../assets/images/profile-3.jpg'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 92.5%;
  padding: 1.75rem 2.5rem;
  background-color: hsl(219, 30%, 18%);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 62.5%;
    height: 25vh;
    justify-content: center;
  }

  @media (max-width: 575.97px) {
  }
`

const Description = styled.p`
  opacity: 0.8;
  font-size: 0.875rem;
  
  @media (min-width: 575.98px) and (max-width: 991.98px) {
    font-size: 1rem;
  }

  @media (max-width: 575.97px) {
  }
`

const Img = styled.img`
  width: 12.75%;
  height: 100%;
  opacity: 0.8;
  border-radius: 50%;
  object-fit: contain;
  object-position: center center;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 15%;
  }

  @media (max-width: 575.97px) {
  }
`

const Name = styled.span`
  opacity: 0.8;
  font-weight: bold;
  font-size: 0.75rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    font-size: 0.875rem;
  }

  @media (max-width: 575.97px) {
  }
`

const Position  = styled.span`
  opacity: 0.8;
  font-size: 0.75rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    font-size: 0.875rem;
  }

  @media (max-width: 575.97px) {
  }
`

const Testimonials = () => {
  return <>
    <div className="row gap-5 gap-xl-0">
      <div className="col-12 col-xl-4 d-flex justify-content-center">
        <Card>
          <Description>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
            become a well-oiled collaboration machine.</Description>
          <div className='d-flex flex-row align-items-center gap-2'>
            <Img src={one} alt="profile-one" />
            <div className='d-flex flex-column lh-sm'>
              <Name>Satish Patel</Name>
              <Position>Founder & CEO, Huddle</Position>
            </div>
          </div>
        </Card>
      </div>
      <div className="col-12 col-xl-4 d-flex justify-content-center">
        <Card>
          <Description>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
            become a well-oiled collaboration machine.</Description>
          <div className='d-flex flex-row align-items-center gap-2'>
            <Img src={two} alt="profile-one" />
            <div className='d-flex flex-column lh-sm'>
              <Name>Bruce McKenzie</Name>
              <Position>Founder & CEO, Huddle</Position>
            </div>
          </div>
        </Card>
      </div>
      <div className="col-12 col-xl-4 d-flex justify-content-center">
        <Card>
          <Description>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
            become a well-oiled collaboration machine.</Description>
          <div className='d-flex flex-row align-items-center gap-2'>
            <Img src={three} alt="profile-one" />
            <div className='d-flex flex-column lh-sm'>
              <Name>Iva Boyd</Name>
              <Position>Founder & CEO, Huddle</Position>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </>

}

export default Testimonials