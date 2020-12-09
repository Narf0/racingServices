import React, { useState } from "react";
import Times from "./components/Times";
import General from "./components/General";
import Races from "./components/Races";

function App() {
	return (
		<div className='App'>
			<main className='container-fluid'>
				<div
					id='carouselExampleControls'
					className='carousel slide'
					data-ride='carousel'
					data-interval='8000'
					data-pause='false'>
					<div className='carousel-inner'>
						<div className='carousel-item active'>
							<General />
						</div>
						<div className='carousel-item'>
							<Races />
						</div>
						<div className='carousel-item'>
							<Times />
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
