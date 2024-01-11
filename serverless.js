/**
 * @type {import('@serverless/typescript').AWS}
 */
const serverlessConfig = {
  service: 'aws-node-typescript-nest',
  frameworkVersion: '3',
  plugins: [
    'serverless-plugin-typescript',
    'serverless-offline',
  ],
  provider: {
    name: 'aws',
    runtime: 'nodejs18.x',
  },
  package: {
    individually: true,
  },
  functions: {
    main: {
      handler: 'src/main.handler',
      events: [
        {
          http: {
            method: 'any',
            path: '/{proxy+}',
          },
        },
      ],
    },
  },
};

module.exports = serverlessConfig;
