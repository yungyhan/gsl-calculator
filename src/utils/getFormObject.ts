import { Matchup, MatchupResult } from "../whoIsGoingToNextRound/types";

export function getFormObject(matchups: Matchup[]): MatchupResult {
  const formValues: MatchupResult = {};

  matchups.forEach((matchup) => {
    formValues[matchup.id] = { [matchup.player1Id]: 0, [matchup.player2Id]: 0 };
  });

  return formValues;
}
