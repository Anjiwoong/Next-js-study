const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: false,
//   swcMinify: true,
//   env: {
//     mongodb_username: 'jiwoong',
//     mongodb_password: 'hvPVyVVLrtT8ThLd',
//     mongodb_clustername: 'cluster0',
//     mongodb_database: 'my-site',
//   },
// };

module.exports = phase => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'jiwoong',
        mongodb_password: 'hvPVyVVLrtT8ThLd',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-site-dev',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'jiwoong',
      mongodb_password: 'hvPVyVVLrtT8ThLd',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'my-site',
    },
  };
};
