const path = require('path')

module.exports = {
  testEnvironment: "node",
  haste: {
    enableSymlinks: true,
  },
  reporters: ["default", path.resolve(__dirname, "jest-reporter")],
  // explicitly specify the path to babel.config.jsz relative to jest.config.js so
  // jest can find it even when jest.config.js is not in the root folder of the workspace
  transform: {
    "^.+\\.[jt]sx?$": [
      "babel-jest",
      { configFile: path.resolve(__dirname, "babel.config.js") },
    ],
  },
  testMatch: ["**/*.test.js"],
};
