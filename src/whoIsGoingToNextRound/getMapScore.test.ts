import { getMapScore } from "./getMapScore";

describe("getMapScore function", () => {
  it("returns the map wins minus the map losses", () => {
    const result = getMapScore({
      playerId: "1",
      matchWins: 2,
      matchLosses: 3,
      mapWins: 8,
      mapLosses: 3,
    });

    expect(result).toEqual(5);
  });
});
