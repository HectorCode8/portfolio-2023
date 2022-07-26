import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creation of E-Commerce platforms. Minimalists, with a strong notion of perfection.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Bring peace to UI/UX design. Whether you need an app designed from scratch or an upgrade for an existing interface</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creation Web Pages with the most used platform in the world with fresh and attractive content.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Develop successful web pages, with fresh content, with state-of-the-art web designs and always thought of producing sales.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Build web apps for efficient management of different business activities.</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Social Media management and content creation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I will do professional video creation for you content.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Instagram Marketing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Facebook ADS</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Brand Promotion</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services