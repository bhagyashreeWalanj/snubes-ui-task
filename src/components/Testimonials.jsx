import React from 'react';
import { Carousel } from 'react-bootstrap';
import talixoBlack from '../images/talixo-logo-black.png';

import testimonyList from '../__mockups/testimonials.json';  

export default function Testimonials() {

  return (
    <>
    <div id="testimonials" className="ml-24 mr-24 mb-8 mt-8 flex-wrap justify-center align-middle text-center h-2/5">
    <Carousel variant="dark">
    {testimonyList.webapp[0].testimonials.map((testimony, index) => {
        
    return ( <Carousel.Item key={index}>
    <div className="max-w-3xl p-4 lg:ml-60 text-gray-800 bg-white rounded-lg text-center justify-center align-middle">
            <div className="mb-2 text-center justify-center">
                <div className="mb-4 flex text-center justify-center">
                    <img src={talixoBlack} alt="talixo" width="100" />
                </div>
            <p className="px-4 text-center text-gray-600 font-normal italic">
                {testimony.speech}
            </p>
            <div className="text-center mt-4">
                <h5 className="font-bold text-indigo-600">{testimony.name}</h5>
                <p className="text-sm text-gray-600">{testimony.position}</p>
            </div>
            </div>
        </div>
    </Carousel.Item>)
    })}
    </Carousel>
    <div className="flex flex-wrap items-center justify-center space-y-4 ">
    {testimonyList.webapp[1].logos.map(logo => {
        return (
            <img key={logo.id} src={logo.path} className="mx-16" alt={logo.name} width="100" />
        )
    })}
    </div>
    </div>



      
    </>
  )
}
