const getEnv = (name, defaultValue) => {
  return process.env[name] ?? defaultValue;
};

const getConfigs = () => ({
  port: parseInt(getEnv('PORT', '3000'), 10),
});

module.exports = { getConfigs };
