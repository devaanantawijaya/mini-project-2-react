const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  collectCoverageFrom: [
    "src/components/**/*.{js,jsx}",
    "src/pages/**/*.{js,jsx}",
    "src/**/*.{js,jsx}",
    "!src/*.{js,jsx}",
    "!src/components/**/*.stories.js",
    "!src/pages/**/api/**",
    "!src/**/*test*.{js,jsx}",
    "!src/routes/**",
  ],

  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/pages/(.*)$": "<rootDir>/pages/$1",
  },
};

module.exports = createJestConfig(customJestConfig);
