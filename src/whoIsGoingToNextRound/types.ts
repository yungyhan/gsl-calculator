export type Score = {
  playerId: string;
  matchWins: number;
  mapWins: number;
  mapLosses: number;
};

export type Matchup = {
  id: string;
  player1Id: string;
  player2Id: string;
};
