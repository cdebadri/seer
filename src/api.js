const URL = 'https://pa566zwp8f.execute-api.ap-south-1.amazonaws.com/v1/users';
const apiKey = 'pk.9cf41837481bdcf2da4bc530567a9247';
const geocodeURL = `https://us1.locationiq.com/v1/search.php?key=${apiKey}&format=json`;

module.exports = {
  getPeopleInformation: () => fetch(`${URL}/tracking`, {
    method: 'GET',
    crossDomain: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }),

  getUser: (email) => fetch(`${URL}/${email}`, {
    method: 'GET',
    crossDomain: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }),

  addUserDetails: (payload, email) => fetch(`${URL}/${email}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
  }),

  geocodeAddress: address => fetch(`${geocodeURL}&q=${address}`, {
    method: 'GET',
    crossDomain: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  })
};
