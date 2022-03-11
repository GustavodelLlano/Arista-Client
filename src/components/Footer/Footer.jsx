import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import LandscapeRoundedIcon from '@mui/icons-material/LandscapeRounded';
import { MDBFooter, MDBIcon } from 'mdb-react-ui-kit';
import "./Footer.css"
import GitHub from '@mui/icons-material/GitHub';
import Facebook from '@mui/icons-material/Facebook';
import Google from '@mui/icons-material/Google';
import Twitter from '@mui/icons-material/Twitter';
import Instagram from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <MDBFooter className='text-center text-lg-start text-muted social'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom redes'>
        <div className='me-5 d-none d-lg-block'>
          <span>Síguenos en redes sociales:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <Instagram />
          </a>
          <a href='' className='me-4 text-reset'>
            <Twitter />
          </a>
          <a href='' className='me-4 text-reset'>
            <Facebook />
          </a>
          <a href='' className='me-4 text-reset'>
            <Google/>
          </a>
          <a href='' className='me-4 text-reset'>
            <GitHub/>
          </a>
        </div>

      </section>

      <section className='info'>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <LandscapeRoundedIcon/> Arista
              </h6>
              <p>
                Somos una aplicación de seguimiento deportivo en la escalada y red social.
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Colaboradores</h6>
              <p>
                <a href='https://www.petzl.com/ES/es/' className='text-reset'>
                  PETZL
                </a>
              </p>
              <p>
                <a href='https://www.lasportiva.com/es' className='text-reset'>
                  La Sportiva
                </a>
              </p>
              <p>
                <a href='indoorwall.com' className='text-reset'>
                  IndoorWall
                </a>
              </p>
              <p>
                <a href='https://www.epictv.com/' className='text-reset'>
                  Epic TV
                </a>
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
              <p>
                <HomeRoundedIcon me-3/> Madrid, 28001, ES
              </p>
              <p>
                <EmailRoundedIcon/> info@arista.com
              </p>
              <p>
                <PhoneAndroidRoundedIcon/> + 34 695 25 11 XX
              </p>
              <p>
                <LocalPhoneRoundedIcon/> 91 514 23 XX
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4 created' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Created by: 
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          Jud y Gus
        </a>
      </div>
    </MDBFooter>
  )
}

export default Footer