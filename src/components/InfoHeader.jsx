import React from 'react'
import WelcomeInfo from './WelcomeInfo'
import ContactForm from './ContactForm'

function InfoHeader() {
	return (
		<div id="contactForm">
			<div className="bg-white max-w-fit rounded lg:hidden mx-auto">
				<ContactForm />
			</div>
			<div className="w-auto h-30 p-6 bg-cover bg-[url('/src/images/callCenter-bg.jpg')]">
				<div className="flex justify-center items-center">
					<div className="bg-white max-w-fit rounded hidden lg:block">
						<ContactForm />
					</div>
					<WelcomeInfo />
				</div>
			</div>
		</div>
	)
}

export default InfoHeader;