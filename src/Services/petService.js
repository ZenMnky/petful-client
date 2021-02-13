import config from '../config';
const API_BASE = config.API_BASE_ENDPOINT;

export const PetService = {
	get() {
		return fetch(`${API_BASE}/pets`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},
		});
	},
	remove(petType) {
		return fetch(`${API_BASE}/pets/${petType}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			},
		});
	}

};