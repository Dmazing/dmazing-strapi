export default ({ env }) => ({
  // Enable content-type builder in development
  'content-type-builder': {
    enabled: env('NODE_ENV') === 'development',
  },
});
