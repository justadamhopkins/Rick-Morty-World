import { getFirstAndLastEpisodes } from "../getFirstAndLastEpisodes";

describe("getFirstAndLastEpisodes", () => {
  test.each([[null], [undefined], [{}]])(
    "should return early if episodes is %o",
    (data) => {
      const result = getFirstAndLastEpisodes(data as any);

      expect(result).toBeFalsy();
    }
  );

  test.each([
    [
      ["episode1", "episode2", "episode3"],
      ["episode1", "episode3"],
    ],
    [["episode1", undefined, null], ["episode1"]],
  ])("should return episodes", (episodes, episodeResult) => {
    const result = getFirstAndLastEpisodes(episodes);

    expect(result).toEqual(episodeResult);
  });
});
