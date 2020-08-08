import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID NONEQAxwxRa1_Lka7h9TvUo2LRFJJDdUgU7fJ3KUAEg'
	}
});