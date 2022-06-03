import { Matchup } from "../whoIsGoingToNextRound/types";

export function getMatchups(playerIds: string[]): Matchup[] {
  const matchups: Matchup[] = [];

  playerIds.forEach((playerId, idIndex) => {
    const array = Array.from(playerIds.keys());
    array.forEach((_key, index) => {
      if (index < idIndex) {
        matchups.push({
          id: playerId + playerIds[index],
          player1Id: playerId,
          player2Id: playerIds[index],
        });
      }
    });
  });

  return matchups;
}
