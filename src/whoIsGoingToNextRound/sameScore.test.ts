import { getScore } from "../utils/getScore";
import { sameScore } from "./sameScore";

describe("sameScore method", () => {
  describe("when two scores are the same", () => {
    it("returns true", () => {
      const scoreA = getScore("1", 2, 3, 1);
      const scoreB = getScore("2", 2, 3, 1);

      const result = sameScore(scoreA, scoreB);

      expect(result).toEqual(true);
    });
  });

  describe("when two scores are different", () => {
    it("returns false", () => {
      const scoreA = getScore("1", 2, 2, 1);
      const scoreB = getScore("2", 2, 3, 1);

      const result = sameScore(scoreA, scoreB);

      expect(result).toEqual(false);
    });
  });
});
