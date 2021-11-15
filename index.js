const api_key = "RGAPI-7b9fc139-3d75-42ba-a78c-70de0b74608a";

// Summoner by name

fetch(
  `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Self%20and%20Sea?api_key=${api_key}`
)
  .then((res) => res.json())
  .then((data) => console.log(data));
