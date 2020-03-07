const API_URL = 'http://localhost:5000/search';

export default {
  search(searchTerm) {
    return fetch(`${API_URL}/${searchTerm}`)
      .then(response => response.json())
      .then(result => result.data);
  },
};
