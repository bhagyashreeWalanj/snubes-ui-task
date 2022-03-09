import React from 'react';
import aboutUsList from '../__mockups/aboutUs.json';

export default function AboutUs() {
    return (
        <div id="aboutUs" className="p-5 py-8 lg:p-14 bg-cover bg-right bg-repeat-space lg:bg-top lg:bg-contain md:bg-[url('/src/images/bg-snubes.png')] border-y-4 border-zinc-100">
        <div className=" md:w-[31rem] ml-3 lg:mx-auto bg-white md:p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg">
            <h2 className="text-left text-3xl font-semibold">Why Snubes?</h2>
            {
                aboutUsList.aboutUs.map((item, index) => {
                    return (
                        <div className={`mx-auto ${aboutUsList.aboutUs.length===index+1 ? '' : 'my-10'}`} key={index}>
                            <h3 className="text-left text-xl font-bold mb-4">{item.title}</h3>
                            <p className="text-left">{item.description}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
    )
}
