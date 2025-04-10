describe('Config Validation', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.clearAllMocks(); // Clears mocks instead of resetting modules
    process.env = { ...originalEnv }; // Resets environment variables
  });

  afterAll(() => {
    process.env = originalEnv; // Restores original environment variables
  });

  it('should throw an error if a required field is missing', () => {
    delete process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

    expect(() => {
      jest.isolateModules(() => {
        require('../src/shared/lib/config'); // Dynamically reload the module
      });
    }).toThrow('Missing or invalid configuration for: stripe.publishableKey');
  });

  it('should throw an error if a required field is empty', () => {
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = '';

    expect(() => {
      jest.isolateModules(() => {
        require('../src/shared/lib/config'); // Dynamically reload the module
      });
    }).toThrow('Missing or invalid configuration for: stripe.publishableKey');
  });

  it('should not throw an error if all required fields are present and valid', () => {
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = 'valid_key';
    process.env.NEXT_STRIPE_KEY = 'valid_secret';
    process.env.PAYPAL_CLIENT_ID = 'valid_client_id';
    process.env.PAYPAL_CLIENT_SECRET = 'valid_client_secret';
    process.env.MONGODB_URI = 'valid_uri';
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY = 'valid_api_key';
    process.env.NEXT_PUBLIC_YMAPS_API_KEY = 'valid_api_key';
    process.env.GITHUB_CLIENT_ID = 'valid_client_id';
    process.env.GITHUB_CLIENT_SECRET = 'valid_client_secret';
    process.env.NEXT_PUBLIC_LATEST_TERMS_OF_USE = 'valid_terms';
    process.env.NEXT_PUBLIC_LATEST_PRIVACY_POLICY = 'valid_policy';

    expect(() => {
      jest.isolateModules(() => {
        require('../src/shared/lib/config'); // Dynamically reload the module
      });
    }).not.toThrow();
  });
});
