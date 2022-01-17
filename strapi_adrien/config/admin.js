module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4cbc5eae7015e7cb7766ff9024280e66'),
  },
});
