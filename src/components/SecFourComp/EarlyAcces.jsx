import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form';

const Card = styled.div`
  position: relative;
  margin: 8.75rem 0 -5rem;
  width: 70%;
  height: 35vh;
  padding: 0 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: var(--alternative-color);

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 90%;
    padding: 0 3.5rem;
  }

  @media (max-width: 575.97px) {
    width: 100%;
    height: auto;
    padding: 3rem 1rem;
  }
`

const Label = styled.h2`
  font-weight: bold;
  font-size: 2rem;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
    font-size: 1.25rem;
  }
`

const Description = styled.p`
  font-size: 0.925rem;

  @media (max-width: 991.98px) {
    font-size: 1rem;
  }
`

const Input = styled.input`
  width: 100%;
  padding: 0.625rem 1rem;
  border: none;
  border-radius: 2rem;

  &:focus {
    box-shadow: none;
  }

  &:focus-visible {
    outline: none;
  }

  @media (max-width: 575.97px) {
  }
`

const Button = styled.button`
  width: 100%;
  padding: 0.625rem 0;
  font-weight: bold;
  border-radius: 2rem;
  background: linear-gradient(to right, #65e2d9, #339ecc);
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    font-size: 0.8rem;
  }
`

const EarlyAcces = () => {

  const { handleSubmit, register, formState: { errors, isDirty, isValid }, reset, trigger } = useForm();

  const handleBlur = async () => {
    await trigger();
  };

  const onSubmit = () => {
    if (isValid) {
      reset();
    }
  };

  return <>
    <div className='d-flex align-items-center justify-content-center'>
      <Card className='container'>
        <div className="row gap-3">
          <div className="col-12">
            <Label>Get early access today</Label>
          </div>
          <div className="col-12">
            <Description>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
              questions, our support team would be happy to help you.</Description>
          </div>
          <div className="col-12">
            <div className="row gap-3 gap-md-0 gap-xl-0">
              <div className="col-12 col-md-8 col-xl-8">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Input
                    type="email"
                    id="email"
                    placeholder='email@example.com'
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    onBlur={() => handleBlur("email")}
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  />
                </form>
              </div>
              <div className="col-12 col-md-4 col-xl-4">
                <Button
                  type="submit"
                  data-bs-toggle="modal"
                  data-bs-target="#footerModal"
                  disabled={!isDirty || !isValid}
                >
                  Get Started for Free
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  </>
}

export default EarlyAcces