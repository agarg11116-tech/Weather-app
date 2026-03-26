let teamA = { runs: 0, wickets: 0, balls: 0 };
let teamB = { runs: 0, wickets: 0, balls: 0 };

function update(team, idScore, idOvers) {
  const overs = Math.floor(team.balls / 6) + "." + (team.balls % 6);

  document.getElementById(idScore).innerText =
    `${team.runs}/${team.wickets}`;

  document.getElementById(idOvers).innerText =
    `(${overs})`;
}

function addRun(team, run) {

let sound = document.getElementById("runSound");
sound.currentTime = 0;
sound.play();
  if (team === "A") {
    teamA.runs += run;
    update(teamA, "scoreA", "oversA");
  } else {
    teamB.runs += run;
    update(teamB, "scoreB", "oversB");
  }
}

function wicket(team) {

let sound = document.getElementById("wicketSound");
sound.currentTime = 0;
sound.play();
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

  update(teamA, "scoreA", "oversA");
  update(teamB, "scoreB", "oversB");
}
