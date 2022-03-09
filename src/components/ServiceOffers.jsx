import React from 'react'
import services from '../__mockups/servicesOffer.json';
import { Figure, Container, Row, Col } from 'react-bootstrap'

export default function ServiceOffers() {

  return (
    <div id="servicesOffers" className="flex justify-center items-center mx-auto py-10 text-black border-y-4 border-zinc-100">
      <Container>
        <Row>
        {services.servicesOffers.map((service, index) => {
           return( <Col sm key={index} className="text-center">
            <Figure>
              <Figure.Image
                className="mx-auto w-20 h-20"
                alt="Signup free"
                src={service.image}
              />
              <Figure.Caption className="text-center">
                <h3 className="font-bold md:text-center text-xl mb-2">
                  {service.name}
                </h3>
                <p> {service.description}</p>
              </Figure.Caption>
            </Figure>
          </Col>)
        })}
        
        </Row>
      </Container>
    </div>
  )
}
