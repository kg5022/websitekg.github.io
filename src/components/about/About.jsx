import React from 'react';
import './about.css';
import MY from '../../assests/my.jpg';
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
    <h5>Get to Know</h5>
    <h2>About Me</h2>
    <div className='container about__container'>
      <div className="about__me">
        <div className="about__me-image">
          <img src={MY} alt="About Image" />
        </div>

      </div>
      <div className="about__content">
      <div className="about__cards">
        <article className='about__card'>
        <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>1+ Years Working</small>
        </article>
        <article className='about__card'>
        <FiUsers className='about__icon'/>
          <h5>Clients</h5>
          <small>300+ clients worldwide</small>
        </article>
        <article className='about__card'>
        <VscFolderLibrary className='about__icon'/>
          <h5>Projects</h5>
          <small>80+ completed project</small>
        </article>
      </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cupiditate explicabo, ipsum facere enim magni consectetur iure? Excepturi dolore debitis modi molestiae reprehenderit. Laudantium molestias accusantium illum, quos fugit labore?
          </p>
          <a href="#contact" className='btn btn-primary'> Let's Talk</a>
      </div>

      </div>
    

    </section>
  )
}

export default About