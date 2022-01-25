module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9436d05f19ac50c9729dea20bb690af0'),
  },
});
