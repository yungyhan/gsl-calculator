import { Score } from "../whoIsGoingToNextRound/types";

export function getScore(
  playerId: string,
  matchWins: number,
  matchLosses: number,
  mapWins: number,
  mapLosses: number
): Score {
  return { playerId, matchWins, matchLosses, mapWins, mapLosses };
}
