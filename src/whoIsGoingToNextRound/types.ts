export type Score = {
  playerId: string;
  matchWins: number;
  matchLosses: number;
  mapWins: number;
  mapLosses: number;
};

export type Matchup = {
  id: string;
  player1Id: string;
  player2Id: string;
};

export type MatchupResult = Record<string, Match>;

export type Match = Record<string, number>;
