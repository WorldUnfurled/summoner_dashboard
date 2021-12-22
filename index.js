const rankInfo = document.getElementById("rank-info");
const rankWR = document.getElementById("rank-wr");
const rankImg = document.getElementById("rank-image");
const api_key = "RGAPI-5ec43e5b-f551-4f10-a055-c5e44178f15b";

fetch(
  // Summoner by name
  `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Self%20and%20Sea?api_key=${api_key}`
)
  .then((res) => res.json())
  .then((data) =>
    fetch(
      // Entries by ID (Endpoint)
      `https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${data.id}?api_key=${api_key}`
    )
      .then((res) => res.json())
      .then(
        (data) =>
          (rankInfo.textContent =
            data[0].tier +
            " " +
            data[0].rank +
            " / " +
            data[0].leaguePoints +
            "LP") &&
          (rankWR.textContent =
            data[0].wins +
            " Wins" +
            " / " +
            data[0].losses +
            " Losses" +
            " (" +
            Math.round((data[0].wins / (data[0].wins + data[0].losses)) * 100) +
            "%)") &&
          (rankImg.src =
            "img/ranks/" + data[0].tier + "_" + data[0].rank + ".png")
      )
  );
