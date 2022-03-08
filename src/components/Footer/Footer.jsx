import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

 const Footer = ( ) => {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Síguenos en redes sociales:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-google'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-linkedin'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-github'></i>
          </a>
        </div>

      </section>

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3'></i>Arista
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
                <i className='fas fa-home me-3'></i> Madrid, 28001, ES
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                info@arista.com
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> + 34 695 25 11 XX
              </p>
              <p>
                <i className='fas fa-print me-3'></i> + 34 685 14 23 XX
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Created by: 
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
           Jud y Gus
        </a>
      </div>
    </MDBFooter>
  )
}

export default Footer