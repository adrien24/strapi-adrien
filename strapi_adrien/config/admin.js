module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '582fa5ed62ae66185e4b0975ce5feeda'),
  },
});
