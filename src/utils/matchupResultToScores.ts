import { Match, MatchupResult, Score } from "../whoIsGoingToNextRound/types";

export function matchupResultToScores({
  playerIds,
  matchupResult,
}: {
  playerIds: string[];
  matchupResult: MatchupResult;
}): Score[] {
  const matches = Object.values(matchupResult);
  return playerIds.map((playerId) => {
    const score: Score = {
      playerId,
      matchWins: 0,
      matchLosses: 0,
      mapWins: 0,
      mapLosses: 0,
    };

    matches.forEach((match) => {
      if (!matchIncludesPlayer(playerId, match)) {
        return;
      }

      for (const [key, value] of Object.entries(match)) {
        if (key === playerId) {
          score.mapWins += value;
        } else {
          score.mapLosses += value;
        }
      }

      if (playersAreDrawn(match) || incompleteMatch(match)) {
        return;
      }

      if (playerWon(playerId, match)) {
        score.matchWins += 1;
      } else {
        score.matchLosses += 1;
      }
    });

    return score;
  });
}

function matchIncludesPlayer(playerId: string, match: Match): boolean {
  const playerIds = Object.keys(match);
  if (playerIds[0] !== playerId && playerIds[1] !== playerId) {
    return false;
  }

  return true;
}

function playersAreDrawn(match: Match): boolean {
  const bothScores = Object.values(match);
  if (bothScores[0] === bothScores[1]) {
    return true;
  }

  return false;
}

function incompleteMatch(match: Match): boolean {
  const bothScores = Object.values(match);
  if (bothScores[0] < 2 && bothScores[1] < 2) {
    return true;
  }

  return false;
}

function playerWon(playerId: string, match: Match): boolean {
  if (match[playerId] === 2) {
    return true;
  }

  return false;
}
