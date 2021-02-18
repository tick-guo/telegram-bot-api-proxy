const dotenv = require('dotenv');

dotenv.config();

const { getConfigs } = require('./configs');
const app = require('./app');

const configs = getConfigs();

app.listen(configs.port, () => {
  console.log(`server listening on port ${configs.port}`);
});
