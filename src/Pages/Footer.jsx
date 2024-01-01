import React from 'react'
import { FaYoutube, FaInstagram, FaTwitter, FaLinkedin, FaTelegram, FaWhatsapp, FaViber, FaFacebook } from 'react-icons/fa'

function Footer() {
  return (
    <>
      <div className="footer"></div>
      <div class="text-bg-secondary p-3 ">
        <div className='row py-5'>
            <h4 class="text-bg-warning" >FOLLOW ME</h4>
            <div className='icon'>
              <a href="https://www.facebook.com/profile.php?id=100076353587376" target="blank"> <p><FaFacebook className="icon facebook" /></p></a>
              <a href="https://api.whatsapp.com/send/?phone=9779842205549&text=I+want+to+join+THT+News+Alerts+free+service+on+whatsapp&type=phone_number&app_absent=0" target="blank"> <p><FaWhatsapp className="icon whatsapp" /></p></a>
              <a href="https://www.linkedin.com/in/ishwar-pal-a62b4b202/" target="blank"> <p><FaLinkedin className="icon linkedin" /></p></a>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer