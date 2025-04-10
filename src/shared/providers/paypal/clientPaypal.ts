import config from '@/shared/lib/config';
import { Client, Environment, LogLevel } from '@paypal/paypal-server-sdk';

const CLIENT_ID = config.paypal.clientId;
const CLIENT_SECRET = config.paypal.clientSecret;

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
