import { getMapScore } from "./getMapScore";
import { sameScore } from "./sameScore";
import { Score } from "./types";

export function whoIsGoingToNextRound(scores: Score[]): string[] {
  const sortedScores = getSortedScores(scores);

  const numberOfAdvancingPlayers =
    getNumberOfConfirmedAdvancingPlayers(sortedScores);

  const advancingScores = sortedScores.slice(0, numberOfAdvancingPlayers);
  return advancingScores.map((score) => score.playerId);
}

export function whoIsNotGoingToNextRound(scores: Score[]): string[] {
  const sortedScores = getSortedScores(scores);

  const numberOfNonAdvancingPlayers =
    getNumberOfConfirmedNonAdvancingPlayers(sortedScores);

  if (numberOfNonAdvancingPlayers === 0) {
    return [];
  }

  const advancingScores = sortedScores.slice(-numberOfNonAdvancingPlayers);
  return advancingScores.map((score) => score.playerId);
}

export function getSortedScores(scores: Score[]): Score[] {
  return scores.sort((a, b) => {
    if (a.matchWins === b.matchWins && a.matchLosses === b.matchLosses) {
      return getMapScore(b) - getMapScore(a);
    }
    return b.matchWins - b.matchLosses - (a.matchWins - a.matchLosses);
  });
}

const MAX_NO_ADVANCING_PLAYERS = 3;

function getNumberOfConfirmedAdvancingPlayers(sortedScores: Score[]): number {
  if (sortedScores.length <= MAX_NO_ADVANCING_PLAYERS) {
    return sortedScores.length;
  }

  for (var i = 0; i < MAX_NO_ADVANCING_PLAYERS; i++) {
    if (sameScore(sortedScores[i], sortedScores[MAX_NO_ADVANCING_PLAYERS])) {
      return i;
    }
  }

  return MAX_NO_ADVANCING_PLAYERS;
}

function getNumberOfConfirmedNonAdvancingPlayers(
  sortedScores: Score[]
): number {
  const numberOfAdvancingPlayers =
    getNumberOfConfirmedAdvancingPlayers(sortedScores);
  const undecidedSpots = MAX_NO_ADVANCING_PLAYERS - numberOfAdvancingPlayers;

  if (undecidedSpots === 0) {
    return sortedScores.length - numberOfAdvancingPlayers;
  }

  if (sortedScores.length <= MAX_NO_ADVANCING_PLAYERS) {
    return 0;
  }

  for (var i = 0; i < sortedScores.length; i++) {
    if (
      sameScore(
        sortedScores[numberOfAdvancingPlayers],
        sortedScores[sortedScores.length - 1 - i]
      )
    ) {
      return i;
    }
  }

  return sortedScores.length - MAX_NO_ADVANCING_PLAYERS;
}
