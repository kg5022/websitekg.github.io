import React from 'react'
import './footer.css';
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Koushik</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Home</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100008121402227"><FaFacebookF/></a>
        <a href="instagram.com"> <BsInstagram/></a>
        <a href="twitter.com"><BsTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>@copy;Koushik.ALL RIGHTS RESERVED</small>
      </div>
    </footer>
  )
}

export default Footer