let teamA = { runs: 0, wickets: 0, balls: 0 };
let teamB = { runs: 0, wickets: 0, balls: 0 };

const logos = {
  CSK: "https://i.imgur.com/7QKQZ8H.png",
  MI: "https://i.imgur.com/6XKQZ8H.png",
  RCB: "https://i.imgur.com/W5QKQZ8.png",
  KKR: "https://i.imgur.com/X5QKQZ8.png"
};

function update(team, scoreId, overId) {
  let overs = Math.floor(team.balls / 6) + "." + (team.balls % 6);

  document.getElementById(scoreId).innerText =
    team.runs + "/" + team.wickets;

  document.getElementById(overId).innerText =
    "(" + overs + ")";

  checkWinner();
}

function playSound(id) {
  let sound = document.getElementById(id);
  sound.pause();
  sound.currentTime = 0;
  sound.play().catch(() => {});
}

function addRun(team, run) {
  playSound("runSound");

  if (team === "A") {
    teamA.runs += run;
    update(teamA, "scoreA", "oversA");
  } else {
    teamB.runs += run;
    update(teamB, "scoreB", "oversB");
  }
}

function wicket(team) {
  playSound("wicketSound");

  if (team === "A") {
    teamA.wickets++;
    update(teamA, "scoreA", "oversA");
  } else {
    teamB.wickets++;
    update(teamB, "scoreB", "oversB");
  }
}

function ball(team) {
  if (team === "A") {
    teamA.balls++;
    update(teamA, "scoreA", "oversA");
  } else {
    teamB.balls++;
    update(teamB, "scoreB", "oversB");
  }
}

function reset() {
  teamA = { runs: 0, wickets: 0, balls: 0 };
  teamB = { runs: 0, wickets: 0, balls: 0 };

  document.getElementById("result").innerText = "";

  update(teamA, "scoreA", "oversA");
  update(teamB, "scoreB", "oversB");
}

function changeTeam(team) {
  if (team === "A") {
    let name = document.getElementById("teamAName").value;
    document.getElementById("nameA").innerText = name;
    document.getElementById("logoA").src = logos[name];
  } else {
    let name = document.getElementById("teamBName").value;
    document.getElementById("nameB").innerText = name;
    document.getElementById("logoB").src = logos[name];
  }
}

function checkWinner() {
  if (teamA.balls >= 6 && teamB.balls >= 6) {
    if (teamA.runs > teamB.runs) {
      document.getElementById("result").innerText = "Team A Wins 🏆";
    } else if (teamB.runs > teamA.runs) {
      document.getElementById("result").innerText = "Team B Wins 🏆";
    } else {
      document.getElementById("result").innerText = "Match Draw 🤝";
    }
  }
}