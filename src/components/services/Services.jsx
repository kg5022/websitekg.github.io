import React from 'react'
import './services.css';
import {BsCheck2} from 'react-icons/bs';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
            <BsCheck2 className="service__list-icon"/>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            
            </li>
            <li>
            <BsCheck2 className="service__list-icon"/>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            
            </li>
            <li>
            <BsCheck2 className="service__list-icon"/>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            
            </li>
            <li>
            <BsCheck2 className="service__list-icon"/>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            
            </li>
            <li>
            <BsCheck2 className="service__list-icon"/>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            
            </li>
            
          </ul>
        </article>
        {/*end of ui/ux*/}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
            <BsCheck2 className="service__list-icon"/>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            
            </li>
            <li>
            <BsCheck2 className="service__list-icon"/>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            
            </li>
            <li>
            <BsCheck2 className="service__list-icon"/>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            
            </li>
            <li>
            <BsCheck2 className="service__list-icon"/>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            
            </li>
            <li>
            <BsCheck2 className="service__list-icon"/>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            
            </li>
            
          </ul>
        </article>
        {/*end of web dev*/}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
            <BsCheck2 className="service__list-icon"/>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            
            </li>
            <li>
            <BsCheck2 className="service__list-icon"/>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            
            </li>
            <li>
            <BsCheck2 className="service__list-icon"/>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            
            </li>
            <li>
            <BsCheck2 className="service__list-icon"/>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            
            </li>
            <li>
            <BsCheck2 className="service__list-icon"/>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            
            </li>
            
          </ul>
        </article>
        {/*end of content creation*/}
      </div>
    </section>
  )
}

export default Services