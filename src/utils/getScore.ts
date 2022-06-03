import { Score } from "../whoIsGoingToNextRound/types";

export function getScore(
  playerId: string,
  matchWins: number,
  mapWins: number,
  mapLosses: number
): Score {
  return { playerId, matchWins, mapWins, mapLosses };
}
