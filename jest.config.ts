export default {
  clearMocks: true,
  collectCoverageFrom: ["src/**/*.{ts,js}", "!src/**/*.d.ts"],
  coverageDirectory: "coverage",
  moduleFileExtensions: ["ts", "js", "json", "node"],
  setupFilesAfterEnv: ["./jest.setup.ts"],
  testEnvironment: "node",
  testRegex: "(test|spec)\\.(ts|js)$",
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
};
