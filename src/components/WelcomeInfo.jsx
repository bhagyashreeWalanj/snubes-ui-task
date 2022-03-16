import React from 'react';
import InfoData from '../__mockups/welcomeInfo.json';

function WelcomeInfo() {
	
	return <div className="flex flex-col self-end md:m-2 text-white">
		<p className="font-medium mb-4 text-center">Welcome to Europe’s largest call center database</p>
		<div className="grid md:grid-cols-4 grid-cols-2 gap-2">
		{InfoData.welcomeData.map((item, index) => {
			return(
				<div key={index} className="text-center">
					<h2 className="font-bold">{item.data}</h2>
					<label className="text-sm">{item.name}</label>
				</div>
			)
		})}
		</div>
	</div>
}

export default WelcomeInfo = React.memo(WelcomeInfo);