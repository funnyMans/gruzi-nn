const config = {
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API || 'http://localhost:3000/api',
    graphqlUrl:
      process.env.NEXT_PUBLIC_API_GQL || 'http://localhost:3000/api/graphql',
  },
  stripe: {
    publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE as string,
    secretKey: process.env.NEXT_PUBLIC_STRIPE_KEY as string,
  },
  paypal: {
    clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
    clientSecret: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_SECRET!,
  },
  mongodb: {
    uri: process.env.NEXT_PUBLIC_MONGODB_URI!,
  },
  googleMaps: {
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  },
  yandexMaps: {
    apiKey: process.env.NEXT_PUBLIC_YMAPS_API_KEY!,
  },
  nextAuth: {
    secret: process.env.NEXTAUTH_SECRET!,
  },
  github: {
    clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID!,
    clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET!,
  },
  terms: {
    latestTermsOfUse: process.env.NEXT_PUBLIC_LATEST_TERMS_OF_USE!,
  },
  privacy: {
    latestPrivacyPolicy: process.env.NEXT_PUBLIC_LATEST_PRIVACY_POLICY!,
  },
  flags: {
    serverApiKey: process.env.GRUZI_STATSIG_SERVER_API_KEY!,
    clientKey: process.env.STATSIG_CLIENT_KEY,
  },
  stream: {
    apiKey: process.env.NEXT_PUBLIC_STREAM_API_KEY!,
    secret: process.env.STREAM_SECRET!,
  },
  environment: process.env.NODE_ENV!,
};

function validateConfig(config: any) {
  const requiredFields = [
    'api.baseUrl',
    'api.graphqlUrl',
    'stripe.publishableKey',
    'stripe.secretKey',
    'paypal.clientId',
    'paypal.clientSecret',
    'mongodb.uri',
    'googleMaps.apiKey',
    'yandexMaps.apiKey',
    'github.clientId',
    'github.clientSecret',
    'terms.latestTermsOfUse',
    'privacy.latestPrivacyPolicy',
  ];

  for (const field of requiredFields) {
    const keys = field.split('.');
    let value = config;
    for (const key of keys) {
      value = value[key];
      if (value === undefined || value === null || value === '') {
        throw new Error(`Missing or invalid configuration for: ${field}`);
      }
    }
  }
}

validateConfig(config);

export default config;
