// Setup environment
const currentEnvironment = process.env.NODE_ENV || 'development';
const secretKeys = require('./secret-keys');

// Sets env variables when not in production
module.exports = () => {
  if (currentEnvironment === 'development' || currentEnvironment === 'test') {
    const environmentVars = secretKeys[currentEnvironment];

    Object.keys(environmentVars).forEach(envVar => {
      process.env[envVar] = environmentVars[envVar];
    });
  }
};
