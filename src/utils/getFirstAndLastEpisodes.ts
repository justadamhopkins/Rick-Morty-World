export const getFirstAndLastEpisodes = (episodeArray: string[]) => {
  if (!episodeArray || !Array.isArray(episodeArray)) return;
  return [episodeArray.shift(), episodeArray.pop()].filter(
    (episode) => episode
  );
};
