import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/project1.jpg'
import IMG2 from '../../assets/nosotros.jpg'
import IMG3 from '../../assets/project3.jpg'
import IMG4 from '../../assets/project4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/project5.jpg'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency App',
    github: 'https://github.com/HectorCode8',
    demo: 'https://hhhcryptoapp.vercel.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Guitar Store App',
    github: 'https://github.com/HectorCode8',
    demo: 'https://guitar-app-three.vercel.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Covid-19 Tracker',
    github: 'https://github.com/HectorCode8',
    demo: 'https://hhh-covid-app.vercel.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Weather Radar',
    github: 'https://github.com',
    demo: 'https://new-weather-app22.vercel.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Quote Cryptocurrencies Instantly',
    github: 'https://github.com/HectorCode8',
    demo: 'https://crypto-cotizacion.vercel.app/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Matrix Animation',
    github: 'https://github.com/HectorCode8',
    demo: 'https://matrix2022.netlify.app/'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio