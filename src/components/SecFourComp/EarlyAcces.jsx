import React from 'react'

const EarlyAcces = () => {
  return <>
    <div>
      <h2>Get early access today</h2>
      <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
        questions, our support team would be happy to help you.</p>
      <form action="">
        <input 
          type="email" 
          name='email' 
          id='email'
          placeholder='email@example.com'
          required 
        />
        <button type="submit">Get Started for Free</button>
      </form>
    </div>

  </>
}

export default EarlyAcces