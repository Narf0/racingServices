import React from "react";
import data from "../data/drivers_karts.json";

function Races2() {
	let contador = 0;
	let contadorCarrera = 0;
	let races = [];

	data.forEach((name) => {
		name.races.forEach((race, index) => {
			if (races[index]) {
				races[index].push({ name: name.name, team: name.team, picture: name.picture, time: race.time });
			} else {
				races[index] = [{ name: name.name, team: name.team, picture: name.picture, time: race.time }];
			}
		});
	});

	races = races.map((race) =>
		race.sort((a, b) => {
			const aTime = a.time.split(/[\.,\:]/g);
			const bTime = b.time.split(/[\.,\:]/g);
			const _a = new Date(0, 0, 0, aTime[0], aTime[1], aTime[2], aTime[3]);
			const _b = new Date(0, 0, 0, bTime[0], bTime[1], bTime[2], bTime[3]);

			if (_a > _b) {
				return 1;
			} else if (_a < _b) {
				return -1;
			} else {
				return 0;
			}
		})
	);

	return (
		<>
			{races.map((race) => {
				contadorCarrera = contadorCarrera + 1;
				return (
					<>
						<div>
							<div className='d-flex justify-content-center'>
								<h1>{`Clasificación Carrera Nº ${contadorCarrera}`}</h1>
							</div>
							<table className='table table-striped'>
								<thead>
									<tr>
										<th scope='col' className='align-middle'>
											Posicion
										</th>
										<th scope='col' className='align-middle'></th>
										<th scope='col' className='align-middle'>
											Nombre
										</th>
										<th scope='col' className='align-middle'>
											Equipo
										</th>
										<th scope='col' className='align-middle'>
											Tiempo
										</th>
									</tr>
								</thead>{" "}
								<tbody>
									{race.map((corredor) => {
										if (contador == 22) {
											contador = 0;
										}
										contador = contador + 1;
										return (
											<>
												<tr>
													<th className='align-middle'>{`${contador}`}</th>
													<td className='align-middle'>
														<img src={corredor.picture} />
													</td>
													<td className='align-middle'>{`${corredor.name}`}</td>
													<td className='align-middle'>{`${corredor.team}`}</td>
													<td className='align-middle'>{`${corredor.time}`}</td>
												</tr>
											</>
										);
									})}
								</tbody>
							</table>
						</div>
					</>
				);
			})}
		</>
	);
}

export default Races2;
