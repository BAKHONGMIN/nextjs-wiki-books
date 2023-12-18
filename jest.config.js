// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require("next/jest")
const createJsetConfig = nextJest({ dir: "./" })
const customJestConfig = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleDirectories: ["node_modules", "<rootDir>/src"],
  testEnvironment: "jsdom",
}

module.exports = createJsetConfig(customJestConfig)
