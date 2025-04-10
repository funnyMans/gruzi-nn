import { Client, Environment, LogLevel } from '@paypal/paypal-server-sdk';

const CLIENT_ID = process.env.PAYPAL_CLIENT_ID || '';
const CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET || '';

const client = new Client({
  clientCredentialsAuthCredentials: {
    oAuthClientId: CLIENT_ID,
    oAuthClientSecret: CLIENT_SECRET,
  },
  timeout: 0,
  environment: Environment.Sandbox,
  logging: {
    logLevel: LogLevel.Info,
    logRequest: {
      logBody: true,
    },
    logResponse: {
      logHeaders: true,
    },
  },
});

export default client;
