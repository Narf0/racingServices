import React from "react";
import data from "../data/drivers_karts.json";

function Times() {
	const listItems = data.map((item, key) => (
		<tr key={key}>
			<td>
				<img alt='corredorPicture' src={item.picture} />
			</td>
			<td className='align-middle'> {item.name}</td>
			<td className='align-middle'> {item.age}</td>
			<td className='align-middle'> {item.team}</td>
			{item.races.map((race, index) => {
				return (
					<td key={index} className='align-middle'>
						{` ${race.time}`}
					</td>
				);
			})}
		</tr>
	));

	return (
		<>
			<div>
				<div className='d-flex justify-content-center'>
					<h1>Pilotos y sus tiempos</h1>
				</div>
				<table className='table table-striped'>
					<thead>
						<tr>
							<th></th>
							<th scope='col'>Nombre</th>
							<th scope='col'>Edad</th>
							<th scope='col'>Equipo</th>
							<th scope='col'>Carrera 1</th>
							<th scope='col'>Carrera 2</th>
							<th scope='col'>Carrera 3</th>
							<th scope='col'>Carrera 4</th>
							<th scope='col'>Carrera 5</th>
							<th scope='col'>Carrera 6</th>
							<th scope='col'>Carrera 7</th>
							<th scope='col'>Carrera 8</th>
							<th scope='col'>Carrera 9</th>
							<th scope='col'>Carrera 10</th>
						</tr>
					</thead>
					<tbody>{listItems}</tbody>
				</table>
			</div>
		</>
	);
}

export default Times;
