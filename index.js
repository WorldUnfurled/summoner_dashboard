const api_key = "RGAPI-ed7b7717-3adc-43b1-b29b-406b7bf77f02";

const rankInfo = document.getElementById("rank-info");
const rankWR = document.getElementById("rank-wr");
const rankImg = document.getElementById("rank-image");

const userData = document.getElementById("user-data");

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

for (let i = 0; i < 10; i++) {
  fetch(
    // Summoner by name
    `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Self%20and%20Sea?api_key=${api_key}`
  )
    .then((res) => res.json())
    .then((data) =>
      fetch(
        `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${data.puuid}/ids?start=0&count=20&api_key=${api_key}`
      )
        .then((res) => res.json())
        .then((data) =>
          fetch(
            `https://americas.api.riotgames.com/lol/match/v5/matches/NA1_4154793253?api_key=${api_key}`
          )
            .then((res) => res.json())
            .then((data) =>
              data.info.participants[i].summonerId ==
              "umnYfLV2itnFyXBwFBbBoVCC3Zh9BV37hLRG_lStZLRHukIn"
                ? (userData.textContent = data.info.participants[i].assists)
                : console.log("Not")
            )
        )
    );
}
