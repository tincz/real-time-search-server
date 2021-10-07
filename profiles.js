const {readFileSync} = require('fs');
let loadProfile = () => JSON.parse(readFileSync('profiles_mock_data.json'));

module.exports = {loadProfile};