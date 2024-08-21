// config/plugins.js
module.exports = {
    graphql: {
      enabled: true,
      config: {
        endpoint: '/graphql',
        shadowCRUD: true,
        playgroundAlways: false,
        depthLimit: 14,
        amountLimit: 100,
        apolloServer: {
          tracing: false,
        },
      },
    },
  };

  
