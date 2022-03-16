import React from 'react'
import services from '../__mockups/servicesOffer.json';

export default function ServiceOffers() {

  return (
    <div id="servicesOffers" className="flex justify-center items-center mx-auto py-10 text-black border-y-4 border-zinc-100">
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 p-2 text-center justify-center">
          {services.servicesOffers.map((service, index) => {
            return (<div key={index} className=" text-gray-500 text-center p-10 rounded-lg">
              <img src={service.image} alt="signup" className="mx-auto w-20 h-20" />
              <h3 className="font-bold md:text-center text-xl mb-2">
                {service.name}
              </h3>
              <p> {service.description}</p></div>)
          })
          }
        </div>
      </div>
    </div>
  )
}
