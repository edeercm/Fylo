import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const SocialMediaIcons = () => {
  return <>
    <ul className='d-flex flex-row text-white fs-5 gap-4'>
      <l1>
        <a href="https://www.facebook.com/" target="_blank">
          <FaFacebook />
        </a>
      </l1>
      <l1>
        <a href="https://twitter.com/" target="_blank">
          <FaXTwitter />
        </a>
      </l1>
      <l1>
        <a href="https://www.instagram.com/" target="_blank">
          <FaInstagram />
        </a>
      </l1>
    </ul>
  </>
}

export default SocialMediaIcons