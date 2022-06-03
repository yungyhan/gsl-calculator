import { Score } from "./types";

export function getMapScore(score: Score): number {
  return score.mapWins - score.mapLosses;
}
