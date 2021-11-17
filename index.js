const api_key = "RGAPI-a073e1a7-9652-4c89-83d2-de84757be48b";

// Summoner by name

fetch(
  `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Self%20and%20Sea?api_key=${api_key}`
)
  .then((res) => res.json())
  .then((data) =>
    fetch(
      `https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${data.id}?api_key=${api_key}`
    )
      .then((res) => res.json())
      .then((data) => console.log(data[0]))
  );

// Entries by ID (Endpoint)
