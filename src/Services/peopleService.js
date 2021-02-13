import config from '../config';
const API_BASE = config.API_BASE_ENDPOINT;

export const PeopleService = {
    get() {
        return fetch(`${API_BASE}/people`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                  },
            })
    },
    post(name) {
        return fetch(`${API_BASE}/people`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({ name: name })
        })
    },
};