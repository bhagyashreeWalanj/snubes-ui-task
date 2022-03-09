import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import bestOfInternetService from '../images/best-of-internet-service.png'
import { FaFacebookF, FaTwitter, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  const footerContent = [
    ['AbountUs', 'Become a partner', 'FAQ'],
    ['Imprint', 'Terms & Conditions', 'Privacy Policy'],
    ['support@snubes.com', '+49 (0) 305 5645327', 'contactImgs'],
  ]

  return (
    <>
      <div style={{ backgroundColor: '#4a4a4a' }}>
        <Container className="pt-10 pb-10">
          <Row>
            <Col className="lg:block md:block hidden">
              <img
                src={bestOfInternetService}
                alt="Best of Award"
                className="lg:block md:block sm:hidden"
                width="50"
                height="50"
              />
            </Col>
            {footerContent.map((content, index) => {
              return (
                <Col
                  key={index}
                  className="lg:text-center text-center flex-none md:flex-1 lg:flex-1 sm:flex-none"
                >
                  {content.map((column, idx) => {
                    return column === 'contactImgs' ? (
                      <div
                        key={idx}
                        className="lg:justify-start justify-center text-white flex flex-wrap  mx-0 sm:mx-6 "
                      >
                        <FaFacebookF className="mx-1" />
                        <FaTwitter className="mx-1" />
                        <FaLinkedin className="mx-1" />
                      </div>
                    ) : (
                      <h3
                        key={idx}
                        className="text-white mb-2 lg:text-left sm:text-center md:text-center "
                      >
                        {column}
                      </h3>
                    )
                  })}
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>
      <div className="p-4 bg-gray-200 text-center">
        <p className="text-sm">© 2019 Snubes GmbH All Rights Reserved.</p>
      </div>
    </>
  )
}
