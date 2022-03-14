module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '010928e3e3db18755aae1925981fe73e'),
  },
});
