import { Matchup } from "../whoIsGoingToNextRound/types";

export function getFormObject(
  matchups: Matchup[]
): Record<string, Record<string, number>> {
  const formValues: Record<string, Record<string, number>> = {};

  matchups.forEach((matchup) => {
    formValues[matchup.id] = { [matchup.player1Id]: 0, [matchup.player2Id]: 0 };
  });

  return formValues;
}
