const config = {
  stripe: {
    publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE as string,
    secretKey: process.env.NEXT_STRIPE_KEY as string,
  },
  paypal: {
    clientId: process.env.PAYPAL_CLIENT_ID!,
    clientSecret: process.env.PAYPAL_CLIENT_SECRET!,
  },
  mongodb: {
    uri: process.env.MONGODB_URI!,
  },
  googleMaps: {
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  },
  yandexMaps: {
    apiKey: process.env.NEXT_PUBLIC_YMAPS_API_KEY!,
  },
  github: {
    clientId: process.env.GITHUB_CLIENT_ID!,
    clientSecret: process.env.GITHUB_CLIENT_SECRET!,
  },
  terms: {
    latestTermsOfUse: process.env.NEXT_PUBLIC_LATEST_TERMS_OF_USE!,
  },
  privacy: {
    latestPrivacyPolicy: process.env.NEXT_PUBLIC_LATEST_PRIVACY_POLICY!,
  },
  environment: process.env.NODE_ENV!,
};

function validateConfig(config: any) {
  const requiredFields = [
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
