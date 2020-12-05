const commitTypes = require("./semanticRelease/commitTypes");
const commitRules = require("./semanticRelease/commitRules");

module.exports = {
  // branches: ["master"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    [
      "@google/semantic-release-replace-plugin",
      {
        replacements: [
          {
            files: ["package.json"],
            from: '"version": ".*"',
            to: '"version": "${nextRelease.version}"',
          },
        ],
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "package.json"],
      },
    ],
  ],
  analyzeCommits: {
    releaseRules: commitRules,
  },
  preset: "conventionalcommits",
  presetConfig: {
    types: commitTypes,
  },
  tagFormat: "${version}",
};
