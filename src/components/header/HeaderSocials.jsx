import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiFacebook} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'
import {FiYoutube} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/h%C3%A9ctor-haro-hermosillo-575032147/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/HectorCode8" target="_blank"><FaGithub/></a>
        <a href="https://www.youtube.com/channel/UCkKeO02DwekZC2NVTI46nig" target="_blank"><FiYoutube/></a>
    </div>
  )
}

export default HeaderSocials