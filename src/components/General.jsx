import React from "react";
import data from "../data/drivers_karts.json";

function General() {
	let contador = 0;
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

	let general = [];
	let puntos2 = 22;
	let vueltas = 0;
	let puntos3;

	races.map((race) => {
		race.map((corredor, index) => {
			if (puntos2 == 0) {
				puntos2 = 22;

				vueltas = vueltas + 1;
			}

			switch (puntos2) {
				case 22:
					//1
					puntos3 = 32;
					break;
				case 21:
					//2
					puntos3 = 27;
					break;
				case 20:
					//3
					puntos3 = 23;
					break;
				case 19:
					//4
					puntos3 = 20;
					break;
				default:
					puntos3 = puntos2;
					break;
			}

			if (vueltas == 0) {
				general[index] = { corredor: corredor.name, team: corredor.team, picture: corredor.picture, puntos: puntos2 };
			} else if (vueltas >= 1) {
				general.forEach((generalName) => {
					if (corredor.name == generalName.corredor) {
						generalName.puntos = generalName.puntos + puntos3;
					}
				});
			}

			puntos2 = puntos2 - 1;
		});
	});

	general.sort(function (a, b) {
		if (a.puntos < b.puntos) {
			return 1;
		} else if (a.puntos > b.puntos) {
			return -1;
		} else {
			return 0;
		}
	});

	return (
		<>
			<div className='d-flex justify-content-center'>
				<h1>Clasificacion General</h1>
			</div>
			<table className='table table-striped'>
				<thead>
					<tr>
						<th scope='col'>Posición</th>
						<th></th>
						<th scope='col'>Nombre</th>
						<th scope='col'>Equipo</th>
						<th scope='col'>Puntos</th>
					</tr>
				</thead>
				<tbody>
					{general.map((corredor, key) => {
						contador = contador + 1;
						return (
							<tr>
								<th className='align-middle'>{`${key + 1}`}</th>
								<td className='align-middle'>
									<img src={corredor.picture} />
								</td>
								<td className='align-middle'>{`${corredor.corredor}`}</td>
								<td className='align-middle'>{`${corredor.team}`}</td>
								<td className='align-middle'>{`${corredor.puntos}`}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}

export default General;
