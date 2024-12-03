import React from 'react'
import { AiOutlinePlayCircle } from "react-icons/ai";

const Cont1 = () => {
  return (
    <div>
            <section className="hero-section">
      <div className="new-feature">
        <span>New feature</span>
        <a href="#dashboard">Check out the team dashboard →</a>
      </div>
      <h1 className="hero-title">Beautiful analytics to grow smarter</h1>
      <p className="hero-description">
        Powerful, self-serve product and growth analytics to help you convert, engage,  <br></br> and retain more users. Trusted by over 4,000 startups.
      </p>
      <div className="hero-buttons">
        <button className="btn btn-demo"><AiOutlinePlayCircle size={15} />    Demo</button>
        <button className="btn btn-signup">Sign up</button>
      </div>

    </section>
    </div>
  )
}

export default Cont1