import { getScore } from "../utils/getScore";
import { Score } from "./types";
import {
  whoIsGoingToNextRound,
  whoIsNotGoingToNextRound,
} from "./whoIsGoingToNextRound";

describe("next round functions", () => {
  describe("when there are no ties in match wins", () => {
    const scores: Score[] = [
      getScore("1", 2, 2, 8, 0),
      getScore("2", 1, 2, 8, 0),
      getScore("3", 3, 2, 6, 2),
      getScore("4", 0, 2, 8, 0),
      getScore("5", 4, 2, 8, 0),
    ];
    it("whoIsGoingToNextRound returns the top three players based on match score", () => {
      const result = whoIsGoingToNextRound(scores);

      expect(result).toEqual(expect.arrayContaining(["1", "3", "5"]));
    });

    it("whoIsNotGoingToNextRound returns the last two players based on match score", () => {
      const result = whoIsNotGoingToNextRound(scores);

      expect(result).toEqual(expect.arrayContaining(["2", "4"]));
    });
  });

  describe("when someone has more match wins but lower map score", () => {
    const scores: Score[] = [
      getScore("1", 2, 2, 6, 4),
      getScore("2", 4, 2, 8, 0),
      getScore("3", 3, 2, 6, 5),
      getScore("4", 0, 2, 8, 0),
      getScore("5", 4, 2, 8, 0),
    ];
    it("whoIsGoingToNextRound returns the top three players based on match score first", () => {
      const result = whoIsGoingToNextRound(scores);

      expect(result).toEqual(expect.arrayContaining(["5", "2", "3"]));
    });

    it("whoIsNotGoingToNextRound returns the last two players based on match score", () => {
      const result = whoIsNotGoingToNextRound(scores);

      expect(result).toEqual(expect.arrayContaining(["1", "4"]));
    });
  });

  describe("when two players are tied for match wins", () => {
    const scores: Score[] = [
      getScore("1", 2, 2, 5, 3),
      getScore("2", 2, 2, 4, 1),
      getScore("3", 3, 2, 6, 2),
      getScore("4", 0, 2, 8, 0),
      getScore("5", 4, 2, 8, 0),
    ];
    it("whoIsGoingToNextRound returns the top three players based on match score first, then separated by map score", () => {
      const result = whoIsGoingToNextRound(scores);

      expect(result).toEqual(expect.arrayContaining(["5", "3", "2"]));
    });

    it("whoIsNotGoingToNextRound returns the last two players based on match score", () => {
      const result = whoIsNotGoingToNextRound(scores);

      expect(result).toEqual(expect.arrayContaining(["1", "4"]));
    });
  });

  describe("when all players are tied", () => {
    const scores: Score[] = [
      getScore("1", 2, 2, 4, 4),
      getScore("2", 2, 2, 4, 4),
      getScore("3", 2, 2, 4, 4),
      getScore("4", 2, 2, 4, 4),
      getScore("5", 2, 2, 4, 4),
    ];
    it("whoIsGoingToNextRound returns an empty array", () => {
      const result = whoIsGoingToNextRound(scores);

      expect(result).toEqual([]);
    });

    it("whoIsNotGoingToNextRound returns an empty array", () => {
      const result = whoIsNotGoingToNextRound(scores);

      expect(result).toEqual([]);
    });
  });

  describe("when top four players are tied", () => {
    const scores: Score[] = [
      getScore("1", 1, 2, 4, 4),
      getScore("2", 2, 2, 4, 4),
      getScore("3", 2, 2, 4, 4),
      getScore("4", 2, 2, 4, 4),
      getScore("5", 2, 2, 4, 4),
    ];
    it("whoIsGoingToNextRound returns an empty array", () => {
      const result = whoIsGoingToNextRound(scores);

      expect(result).toEqual([]);
    });

    it("whoIsNotGoingToNextRound returns an array with the player in last place", () => {
      const result = whoIsNotGoingToNextRound(scores);

      expect(result).toEqual(["1"]);
    });
  });

  describe("when middle three players are tied", () => {
    const scores: Score[] = [
      getScore("1", 1, 2, 4, 4),
      getScore("2", 2, 2, 4, 4),
      getScore("3", 2, 2, 4, 4),
      getScore("4", 2, 2, 4, 4),
      getScore("5", 2, 2, 5, 4),
    ];

    it("whoIsGoingToNextRound returns an array with the winner only", () => {
      const result = whoIsGoingToNextRound(scores);

      expect(result).toEqual(["5"]);
    });

    it("whoIsNotGoingToNextRound returns an array with the player in last place", () => {
      const result = whoIsNotGoingToNextRound(scores);

      expect(result).toEqual(["1"]);
    });
  });

  describe("when third and fourth place are tied", () => {
    const scores: Score[] = [
      getScore("1", 1, 2, 4, 4),
      getScore("2", 3, 2, 4, 4),
      getScore("3", 2, 2, 4, 4),
      getScore("4", 2, 2, 4, 4),
      getScore("5", 2, 2, 5, 4),
    ];

    it("whoIsGoingToNextRound returns an array with the first and second place only", () => {
      const result = whoIsGoingToNextRound(scores);

      expect(result).toEqual(["2", "5"]);
    });

    it("whoIsNotGoingToNextRound returns an array with the player in last place", () => {
      const result = whoIsNotGoingToNextRound(scores);

      expect(result).toEqual(["1"]);
    });
  });

  describe("when third, fourth and fifth place are tied", () => {
    const scores: Score[] = [
      getScore("1", 2, 2, 4, 4),
      getScore("2", 3, 2, 4, 4),
      getScore("3", 2, 2, 4, 4),
      getScore("4", 2, 2, 4, 4),
      getScore("5", 2, 2, 5, 4),
    ];

    it("whoIsGoingToNextRound returns an array with the first and second place only", () => {
      const result = whoIsGoingToNextRound(scores);

      expect(result).toEqual(["2", "5"]);
    });

    it("whoIsNotGoingToNextRound returns an empty array", () => {
      const result = whoIsNotGoingToNextRound(scores);

      expect(result).toEqual([]);
    });
  });
});
