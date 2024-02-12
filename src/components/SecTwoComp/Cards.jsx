import React from 'react'
import styled from 'styled-components'
import access from '../../assets/images/icon-access-anywhere.png'
import security from '../../assets/images/icon-security.png'
import collaboration from '../../assets/images/icon-collaboration.png'
import anyfile from '../../assets/images/icon-any-file.png'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const ImageContainer = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const Img = styled.img`
  width: 15%;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const Label = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 1.125rem;
 
  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const Description = styled.p`
  width: 65%;
  color: white;
 
  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`

const Cards = () => {
  return <>
    <div className="row d-flex align-items-center gap-5">
      <div className="col-12">
        <div className="row">
          <div className="col-6">
            <Card>
              <ImageContainer>
                <Img src={access} alt="access-icon" />
              </ImageContainer>
              <Label>Access your files, anywhere</Label>
              <Description>The ability to use a smartphone, tablet, or computer to access your account means your
                files follow you everywhere.</Description>
            </Card>
          </div>
          <div className="col-6">
            <Card>
              <ImageContainer>
                <Img src={security} alt="security-icon" />
              </ImageContainer>
              <Label>Security you can trust</Label>
              <Description>2-factor authentication and user-controlled encryption are just a couple of the security
                features we allow to help secure your files.</Description>
            </Card>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="row">
          <div className="col-6">
            <Card>
              <ImageContainer>
                <Img src={collaboration} alt="collaboration-icon" />
              </ImageContainer>
              <Label>Real-time collaboration</Label>
              <Description> Securely share files and folders with friends, family and colleagues for live collaboration.
                No email attachments required.</Description>
            </Card>
          </div>
          <div className="col-6">
            <Card>
              <ImageContainer>
                <Img src={anyfile} alt="anyfile-icon" />
              </ImageContainer>
              <Label>Store any type of file</Label>
              <Description>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all
                file types to be securely stored and shared.</Description>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Cards