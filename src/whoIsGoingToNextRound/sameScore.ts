import { getMapScore } from "./getMapScore";
import { Score } from "./types";

export function sameScore(scoreA: Score, scoreB: Score): boolean {
  if (
    scoreA.matchWins === scoreB.matchWins &&
    getMapScore(scoreA) === getMapScore(scoreB)
  ) {
    return true;
  }
  return false;
}
