export const getMockCharacterData = () => ({
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  gender: "Male",
  avatar: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  origin: {
    id: 1,
    name: "Earth (C-137)",
    type: "Planet",
    dimension: "Dimension C-137",
    noOfResidents: 27,
  },
  location: {
    id: 20,
    name: "Earth (Replacement Dimension)",
    type: "Planet",
    dimension: "Replacement Dimension",
    noOfResidents: 139,
  },
  episodes: [
    {
      id: 1,
      name: "Pilot",
      airDate: "December 2, 2013",
      noOfCharacters: 19,
      episode: "S01E01",
    },
    {
      id: 41,
      name: "Star Mort: Rickturn of the Jerri",
      airDate: "May 31, 2020",
      noOfCharacters: 13,
      episode: "S04E10",
    },
  ],
});
