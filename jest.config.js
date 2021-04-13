module.exports = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/tests/setupTests.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  modulePaths: ["src"],
  moduleNameMapper: {
    "^_atoms/(.*)": "<rootDir>/src/components/_atoms/$1",
    "^_molecules/(.*)": "<rootDir>/src/components/_molecules/$1",
    "^_organisms/(.*)": "<rootDir>/src/components/_organisms/$1",
    "^_templates/(.*)": "<rootDir>/src/components/_templates/$1",
    "^_shared/(.*)": "<rootDir>/src/components/_shared/$1",
  },
};
