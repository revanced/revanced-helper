export default {
    branches: [
        'main',
        {
            name: 'dev',
            prerelease: true,
        },
    ],
    plugins:
        process.env.RELEASE_WORKFLOW_STEP === 'release'
            ? [
                  [
                      '@semantic-release/commit-analyzer',
                      {
                          releaseRules: [{ type: 'build', scope: 'Needs bump', release: 'patch' }],
                      },
                  ],
                  '@semantic-release/release-notes-generator',
                  '@semantic-release/changelog',
                  [
                      '@semantic-release/git',
                      {
                          assets: ['README.md', 'CHANGELOG.md', 'package.json'],
                      },
                  ],
                  [
                      '@semantic-release/github',
                      {
                          assets: [
                              {
                                  path: 'dist/*',
                              },
                          ],
                          successComment: false,
                      },
                  ],
                  [
                      '@saithodev/semantic-release-backmerge',
                      {
                          backmergeBranches: [
                              {
                                  from: 'main',
                                  to: 'dev',
                              },
                          ],
                          clearWorkspace: true,
                      },
                      true,
                  ],
              ]
            : [],
}
